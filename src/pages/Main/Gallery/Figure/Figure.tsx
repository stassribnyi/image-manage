import React from 'react';

import './Figure.scss';

export interface FigureProps {
  readonly url: string;
  readonly tooltip: string;
}

const Figure: React.FC<FigureProps> = ({ url, tooltip }) => (
  <div className='figure column is-one-third'>
    <figure className='figure__content has-background-white'>
      <img src={url} alt={tooltip} />
    </figure>
  </div>
);

export default Figure;
