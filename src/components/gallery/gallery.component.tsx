import React from 'react';

import Masonry from 'react-masonry-component';

import { Figure } from '../figure';

import { GalleryProps } from './gallery.types';

import './gallery.styles.scss';

const masonryOptions = {
  transitionDuration: 200
};

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className='container center'>
    <Masonry
      elementType='div'
      className='gallery columns is-variable is-2'
      options={masonryOptions}
    >
      {images.map(img => (
        <Figure key={img.id} {...img} />
      ))}
    </Masonry>
  </div>
);

export default Gallery;
