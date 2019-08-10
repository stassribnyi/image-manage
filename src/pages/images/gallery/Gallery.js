import React from 'react';
import Masonry from 'react-masonry-component';

import './Gallery.css';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.some-class-with-bg-image' };

export default ({ elements }) => {
  const childElements = elements.map(function(element) {
    return (
      <div className="column image-container is-one-third" key={element.url}>
        <figure className="image-cell has-background-white">
          <img src={element.url} />
        </figure>
      </div>
    );
  });

  return (
    <Masonry
      className="gallery columns is-variable is-2"
      elementType="div"
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
      imagesLoadedOptions={imagesLoadedOptions}
    >
      {childElements}
    </Masonry>
  );
};
