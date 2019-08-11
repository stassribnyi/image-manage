import React from 'react';

import { NavLink } from 'react-router-dom';

import './LevelNav.css';

export default props => (
  <ul className="level-nav level">
    {props.links.map((item, i) => (
      <li key={i} className="level-nav__item level-item">
        <NavLink
          exact
          to={item.to}
          activeClassName="is-active"
          className="button is-info is-outlined is-inverted is-rounded"
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);
