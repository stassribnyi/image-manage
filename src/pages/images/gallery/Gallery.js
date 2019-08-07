import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import './Gallery.css';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Gallery extends Component {
  render() {
    const childElements = this.props.elements.map(function(element) {
      return (
        <div
          key={element.url}
          className="col-lg-3 col-md-4 col-sm-6 col-xs-12 image-cell"
        >
          <img src={element.url} />
        </div>
      );
    });

    return (
      <Masonry
        className="row" // default ''
        elementType="div" // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}

export default Gallery;
