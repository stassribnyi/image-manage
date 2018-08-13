import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchImages, deleteImage } from '../../actions/imageActions';
import { setPageNumber, setPageSize } from '../../actions/paginationActions';

import Pagination from '../../components/pagination';

import './Images.css';


const ImageTableTr = props => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <a href={props.url} className="image-container">
          <span
            className="image"
            style={{ backgroundImage: `url("${props.url}")` }}
          />
        </a>
      </td>
      <td>{props.tooltip}</td>
      <td>
        <NavLink to={`edit/${props.id}`}>Edit</NavLink>
      </td>
      <td className="text-danger delete-image" onClick={props.onDelete}>Delete</td>
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
    if (window.confirm("Do you really want to delete this image?")) {
      this.props.deleteImage(id);
    }
  }

  handlePageNumberChange = event => {
    const re = /^[0-9\b]+$/;
    const value = event.target.value;

    if (value === '' || re.test(value)) {
      this.props.setPageNumber(parseInt(value, 10));
    }
  };

  handlePageSizeChange = event => {
    this.props.setPageSize(parseInt(event.target.value, 10));
  };

  handleNext = () => {
    const { pageNumber, pageSize, itemsCount } = this.props.pagination;

    const newNumber = pageNumber + 1;

    if (newNumber > Math.ceil(itemsCount / pageSize)) {
      return;
    }

    this.props.setPageNumber(newNumber);
  };

  handlePrev = () => {
    const { pageNumber } = this.props.pagination;
    const newNumber = pageNumber - 1;

    if (newNumber <= 0 || pageNumber === newNumber) {
      return;
    }

    this.props.setPageNumber(newNumber);
  };

  handleLast = () => {
    const { pageNumber, pageSize, itemsCount } = this.props.pagination;

    const newNumber = Math.ceil(itemsCount / pageSize);

    if (newNumber === pageNumber) {
      return;
    }

    this.props.setPageNumber(newNumber);
  };

  handleFirst = () => {
    const { pageNumber } = this.props.pagination;

    const newNumber = 1;

    if (newNumber === pageNumber) {
      return;
    }

    this.props.setPageNumber(newNumber);
  };

  render() {
    const { images, pagination } = this.props;

    const paginationConfig = {
      ...pagination,
      onPageNumberChange: this.handlePageNumberChange,
      onPageSizeChange: this.handlePageSizeChange,
      onNext: this.handleNext,
      onPrev: this.handlePrev,
      onFirst: this.handleFirst,
      onLast: this.handleLast
    };

    const trs = images.map((image, i) => (
      <ImageTableTr key={image.id}
        {...image}
        onDelete={() => this.handleDeleteImage(image.id)}
      />)
    );

    return (
      <div className="row">
        <div className="col">
          <div className="responsive-image-table">
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

export default connect(
  mapStateToProps,
  { deleteImage, fetchImages, setPageNumber, setPageSize }
)(Images);
