import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

export default props => (
  <NavLink exact activeClassName="is-active" {...props}>
    {props.name}
  </NavLink>
);
