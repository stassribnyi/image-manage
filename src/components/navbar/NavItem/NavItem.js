import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

export default props => {
  const showIcon = !!props.icon;
  const showName = !!props.name;

  const iconClass = ['icon', props.icon].join(' ');
  const linkClass = ['icon-container', 'nav-item', props.className].join(' ');

  return (
    <NavLink
      exact
      to={props.to}
      className={linkClass}
      activeClassName="active"
      onClick={props.onClick}
    >
      {showIcon ? <span className={iconClass} /> : null}
      {showName ? <span className="nav-item-name">{props.name}</span> : null}
    </NavLink>
  );
};
