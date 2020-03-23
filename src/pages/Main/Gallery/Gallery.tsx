import React from 'react';

import Masonry from 'react-masonry-component';

import Figure from './Figure';

import { Image } from '../../../providers';

import './Gallery.scss';

const masonryOptions = {
  transitionDuration: 200
};

export interface GalleryProps {
  readonly images: Array<Image>;
}

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
