import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchImages } from '../../actions/imagesActions';
import * as paginationActions from '../../actions/paginationActions';

import './Images.css';
import Gallery from '../Main/Gallery';

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

  render() {
    return <Gallery images={this.props.images} />;
  }
}

const mapStateToProps = state => ({
  images: state.images,
  pagination: state.pagination
});

const mapDispatchToProps = {
  ...paginationActions,
  fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
