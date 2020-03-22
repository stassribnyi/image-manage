import React from 'react';

import { NavLink } from 'react-router-dom';

import './LevelNav.scss';

export interface LevelNavLinkProps {
  readonly to: string;
  readonly name: string;
}

export interface LevelNavProps {
  readonly links: Array<LevelNavLinkProps>;
}

const LevelNav: React.FC<LevelNavProps> = props => (
  <ul className='level-nav level'>
    {props.links.map((item, i) => (
      <li key={i} className='level-nav__item level-item'>
        <NavLink
          exact
          to={item.to}
          activeClassName='is-active'
          className='button is-info is-outlined is-inverted is-rounded'
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default LevelNav;
