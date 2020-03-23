import React from 'react';

import { LevelNavLink } from '../level-nav-link';

import { LevelNavProps } from './level-nav.types';

import './level-nav.styles.scss';

const LevelNav: React.FC<LevelNavProps> = ({ links }) => (
  <ul className='level-nav level'>
    {links.map((link, idx) => (
      <li key={idx} className='level-nav__item level-item'>
        <LevelNavLink {...link} />
      </li>
    ))}
  </ul>
);

export default LevelNav;
