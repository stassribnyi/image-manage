import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { showPreview } from '../../actions/previewModalActions';
import { fetchImages, deleteImage } from '../../actions/imagesActions';
import * as paginationActions from '../../actions/paginationActions';

import Preview from '../../components/preview';
import Pagination from '../../components/pagination';

import './Images.css';

const ImageTableTr = props => {
  const { id, tooltip, url } = props;
  const { onPreview, onDelete } = props;

  const imageStyle = {
    style: { backgroundImage: `url("${url}")` }
  };

  return (
    <tr>
      <td data-cell-name="#: ">{id}</td>
      <td>
        <span className="image-container" onClick={onPreview}>
          <span className="image" {...imageStyle} />
        </span>
      </td>
      <td data-cell-name="Tooltip: ">{tooltip}</td>
      <td>
        <NavLink to={`edit/${id}`}>Edit</NavLink>
      </td>
      <td className="text-danger delete-image" onClick={onDelete}>
        Delete
      </td>
    </tr>
  );
};

class Images extends Component {
  componentDidUpdate(prevProps) {
    const prevPagination = prevProps.pagination;
    const pagination = this.props.pagination;

    if (
      prevPagination.pageNumber !== pagination.pageNumber ||
      prevPagination.pageSize !== pagination.pageSize
    ) {
      this.fetchImages(pagination);
    }
  }

  componentDidMount() {
    this.fetchImages(this.props.pagination);
  }

  fetchImages(pagination) {
    const { pageNumber, pageSize } = pagination;

    this.props.fetchImages(pageNumber, pageSize);
  }

  handleDeleteImage = id => {
    if (window.confirm('Do you really want to delete this image?')) {
      this.props.deleteImage(id);
    }
  };

  render() {
    const { images, pagination } = this.props;

    const paginationConfig = {
      ...pagination,
      onNext: this.props.moveToNext,
      onPrev: this.props.moveToPrev,
      onLast: this.props.moveToLast,
      onFirst: this.props.moveToFirst,
      onPageSizeChange: this.props.setPageSize,
      onPageNumberChange: this.props.moveToPage
    };

    const trs = images.map((image, i) => (
      <ImageTableTr
        key={image.id}
        {...image}
        onDelete={() => this.handleDeleteImage(image.id)}
        onPreview={() => this.props.showPreview(<Preview {...image} />)}
      />
    ));

    return (
      <div className="row">
        <div className="col">
          <div className="responsive-table">
            <table className="table table-striped image-table">
              <thead className="bg-success image-thead">
                <tr>
                  <th className="th-40">#</th>
                  <th className="th-image">Image</th>
                  <th>Tooltip</th>
                  <th className="th-40">Edit</th>
                  <th className="th-40">Delete</th>
                </tr>
              </thead>
              <tbody className="image-tbody">{trs}</tbody>
              <tfoot className="bg-success image-tfoot">
                <tr>
                  <td colSpan="5">
                    <Pagination {...paginationConfig} />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images,
  pagination: state.pagination
});

const mapDispatchToProps = {
  ...paginationActions,
  deleteImage,
  fetchImages,
  showPreview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);
