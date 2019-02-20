import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logoPath from '../../assets/home.png';

import './Navbar.css';

const NavItem = props => {
  const iconClass = ['icon', props.icon].join(' ');

  return (
    <li className="nav-item">
      <NavLink
        to={props.to}
        exact
        className="nav-link"
        activeClassName="active"
        onClick={props.onClick}
      >
        <span className={iconClass} />
        <span className="nav-link-name">{props.name}</span>
      </NavLink>
    </li>
  );
};

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  toggleCollapse = () => {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  };

  render() {
    const navClass = this.state.collapsed ? 'collapse' : '';

    const routes = [
      {
        to: '/',
        icon: 'all-images',
        name: 'All Images'
      },
      {
        to: '/new',
        icon: 'add-new-image',
        name: 'Add new image'
      }
    ];

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        <NavLink to="/" className="navbar-brand" onClick={this.toggleCollapse}>
          <span className="icon home" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarsDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`navbar-collapse ${navClass}`}>
          <ul className="navbar-nav mr-auto">
            {routes.map((route, i) => (
              <NavItem
                key={i}
                to={route.to}
                icon={route.icon}
                name={route.name}
                onClick={this.toggleCollapse}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
