import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoPath from '../../assets/logo.png';

import './Navbar.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const navClass = this.state.collapsed ? 'collapse' : '';

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        <NavLink to="/" className="navbar-brand" onClick={this.toggleCollapse}>
          <img src={logoPath} alt="Image manager" className="logo" />
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
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="active"
                onClick={this.toggleCollapse}
              >
                All Images
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/new"
                className="nav-link"
                activeClassName="active"
                onClick={this.toggleCollapse}
              >
                Add new image
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
