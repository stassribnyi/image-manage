import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../../actions/imageActions';

import './Images.css';

const DEFAULT_PAGE_SIZE_OPTIONS = [1, 5, 25, 50];

class Images extends Component {
  render() {
    const trs = this.props.images.map((image, i) => (
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
              {/* pagination */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images.items
});

export default connect(mapStateToProps, { fetchImages })(Images);