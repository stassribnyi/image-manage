import React from 'react';

import './base-layout.styles.scss';

const BaseLayout: React.FC = ({ children }) => (
  <div className='base-layout'>{children}</div>
);

export default BaseLayout;
