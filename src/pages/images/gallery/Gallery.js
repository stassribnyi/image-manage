import React from 'react';
import Masonry from 'react-masonry-component';

import './Gallery.css';

const masonryOptions = {
  transitionDuration: 200
};

export default ({ elements }) => {
  const childElements = elements.map((element) => {
    return (
      <div className="column image-container is-one-third" key={element.id}>
        <figure className="image-cell has-background-white">
          <img src={element.url} alt={element.tooltip}/>
        </figure>
      </div>
    );
  });

  return (
    <Masonry
      elementType="div"
      className="gallery columns is-variable is-2"
      options={masonryOptions}
    >
      {childElements}
    </Masonry>
  );
};
