import React from 'react';

import './Figure.css';

export default props => (
  <div className="figure column is-one-third">
    <figure className="figure__content has-background-white">
      <img src={props.url} alt={props.tooltip} />
    </figure>
  </div>
);
