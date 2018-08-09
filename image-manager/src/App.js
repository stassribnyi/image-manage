import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

class App extends Component {
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
      <div className="App">
        {
          imgs
        }
      </div>
    );
  }
}

export default App;
