import React from 'react';

import { FigureProps } from './figure.types';

import './figure.styles.scss';

const Figure: React.FC<FigureProps> = ({ url, tooltip }) => (
  <div className='figure column is-one-third'>
    <figure className='figure__content has-background-white'>
      <img src={url} alt={tooltip} />
    </figure>
  </div>
);

export default Figure;
