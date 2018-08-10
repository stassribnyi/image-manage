import React, { Component } from 'react';
import axios from 'axios';
import config from '../../assets/config';

import './Images.css';

const DEFAULT_PAGE_SIZE_OPTIONS = [1, 5, 25, 50];

const instance = axios.create({
  baseURL: config.BASE_URL
});

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    instance.get('/images').then(response => {
      console.log('fetched');

      this.setState({ images: response.data });
    });
  }

  render() {
    const trs = this.state.images.map((image, i) => (
      <tr key={image.id}>
        <td>{i + 1}</td>
        <td>
          <a href={image.url}>
            <span className="image" style={{ backgroundImage: `url("${image.url}")` }} />
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

export default Images;
