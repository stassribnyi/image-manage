import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../../actions/imageActions';
import { setPageNumber, setPageSize } from '../../actions/paginationActions';

import Pagination from '../../components/pagination';

import './Images.css';

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

  handlePageNumberChange = event => {
    const re = /^[0-9\b]+$/;
    const value = event.target.value;

    if (value === '' || re.test(value)) {
      this.props.setPageNumber(parseInt(value));
    }
  };

  handlePageSizeChange = event => {
    this.props.setPageSize(parseInt(event.target.value));
  };

  handleNext = () => {
    const { pageNumber, pageSize, itemsCount } = this.props.pagination;

    const newNumber = pageNumber + 1;

    if (newNumber > Math.round(itemsCount / pageSize)) {
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

    const newNumber = Math.round(itemsCount / pageSize);

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
      <tr key={image.id}>
        <td>{i + 1}</td>
        <td>
          <a href={image.url}>
            <span
              className="image"
              style={{ backgroundImage: `url("${image.url}")` }}
            />
          </a>
        </td>
        <td>{image.tooltip}</td>
      </tr>
    ));

    return (
      <div className="row">
        <div className="col">
          <div className="responsive-image-table">
            <table className="table table-striped image-table">
              <thead className="bg-success image-thead">
                <tr>
                  <th>#</th>
                  <th>Url</th>
                  <th>Tooltip</th>
                </tr>
              </thead>
              <tbody className="image-tbody">{trs}</tbody>
              <tfoot className="bg-success image-tfoot">
                <tr>
                  <td colSpan="3">
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
  { fetchImages, setPageNumber, setPageSize }
)(Images);
