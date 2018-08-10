import React, { Component } from 'react';
import axios from 'axios';
import config from '../../assets/config';

import './Images.css';

const instance = axios.create({
  baseURL: config.BASE_URL
});

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    instance.get('/images')
      .then(response => {
        console.log('fetched');
        
        this.setState({ images: response.data })
      });
  }

  render() {
    const imgs = this.state.images.map(x => <img
      src={x.url}
      key={x.id}
      height="100"
      width="100" />);

    return (
      <div>
        {
          imgs
        }
      </div>
    );
  }
}

export default Images;
