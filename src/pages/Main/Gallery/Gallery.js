import React from 'react';

import Masonry from 'react-masonry-component';

import Figure from './Figure';

import './Gallery.css';

const masonryOptions = {
  transitionDuration: 200
};

export default ({ elements }) => (
  <Masonry
    elementType="div"
    className="gallery columns is-variable is-2"
    options={masonryOptions}
  >
    {elements.map(img => (
      <Figure key={img.id} {...img} />
    ))}
  </Masonry>
);
