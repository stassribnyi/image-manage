import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../../actions/imageActions';

import Pagination from '../../components/pagination';

import './Images.css';

class Images extends Component {
  componentDidMount() {
    const { pageNumber, pageSize } = this.props.pagination;

    this.props.fetchImages(pageNumber, pageSize);
  }

  render() {
    const { images, pagination } = this.props;

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
          <div className="row">
            <div className="col">
              <div className="responsive-image-table">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Url</th>
                      <th>Tooltip</th>
                    </tr>
                  </thead>
                  <tbody>{trs}</tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mx-auto col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <Pagination {...pagination} />
            </div>
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
  { fetchImages }
)(Images);
