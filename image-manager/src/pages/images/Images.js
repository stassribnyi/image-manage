import React, { Component } from 'react';

import './Images.css';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
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
