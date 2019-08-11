import React from 'react';
import PropTypes from 'prop-types';

import Masonry from 'react-masonry-component';

import Figure from './Figure';

import './Gallery.css';

const masonryOptions = {
  transitionDuration: 200
};

const Gallery = ({ images }) => (
  <Masonry
    elementType="div"
    className="gallery columns is-variable is-2"
    options={masonryOptions}
  >
    {images.map(img => (
      <Figure key={img.id} {...img} />
    ))}
  </Masonry>
);

Gallery.propTypes = {
  images: PropTypes.array.isRequired
}

export default Gallery;
