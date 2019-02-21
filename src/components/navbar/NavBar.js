import React, { Component } from 'react';

import './NavBar.css';

import NavItem from './NavItem';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  resetCollapse = () => {
    this.setState({ collapsed: true });
  };

  toggleCollapse = () => {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  };

  render() {
    const navClass = [
      'navbar-collapse',
      `${this.state.collapsed ? 'collapse' : ''}`
    ].join(' ');

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
        <NavItem
          to="/"
          icon="home"
          className="navbar-brand"
          onClick={this.resetCollapse}
        />
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-controls="navbarDefault"
          aria-label="Toggle navigation"
          onClick={this.toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={navClass}>
          <ul className="navbar-nav ml-auto">
            {routes.map((route, i) => (
              <li key={i}>
                <NavItem
                  to={route.to}
                  icon={route.icon}
                  name={route.name}
                  className="nav-link"
                  onClick={this.resetCollapse}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
