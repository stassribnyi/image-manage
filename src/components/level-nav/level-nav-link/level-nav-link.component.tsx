import React from 'react';

import { NavLink } from 'react-router-dom';

import { LevelNavLinkProps } from './level-nav-link.types';

const LevelNav: React.FC<LevelNavLinkProps> = ({ to, name }) => (
  <NavLink
    exact
    to={to}
    activeClassName='is-active'
    className='button is-info is-outlined is-inverted is-rounded'
  >
    {name}
  </NavLink>
);

export default LevelNav;
