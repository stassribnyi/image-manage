import React from 'react';

import PropTypes from 'prop-types';

import './Figure.css';

const Figure = props => (
  <div className="figure column is-one-third">
    <figure className="figure__content has-background-white">
      <img src={props.url} alt={props.tooltip} />
    </figure>
  </div>
);

Figure.propTypes = {
  url: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
}

export default Figure;
