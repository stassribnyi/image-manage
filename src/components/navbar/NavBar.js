import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as paginationActions from '../../actions/paginationActions';

import './NavBar.css';

import NavItem from './NavItem';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  resetState = () => {
    this.setState({ collapsed: true });

    this.props.resetPagination();
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
      <header class="hero">
        <div class="hero-body">
          <div class="container">
            <div class="columns center-column">
              <div class="column is-half">
                <h1 class="title center-column">
                  <span class="title is-4 has-text-white">Welcome to</span>
                  <span class="title is-3 has-text-white">
                    Cats Photo Gallery
                  </span>
                </h1>
                <h2 class="title is-5 has-text-white has-text-centered">
                  Here you will find lots of cat's photos from professional
                  photographers all around the globe
                </h2>
              </div>
            </div>
          </div>
        </div>
        <nav class="hero-foot">
          <ul class="level">
            <li class="level-item">
              <a
                class="button is-info is-outlined is-inverted is-rounded"
                href=""
              >
                All
              </a>
            </li>
            <li class="level-item">
              <a
                class="button is-info is-outlined is-inverted is-rounded"
                href=""
              >
                Favorites
              </a>
            </li>
            <li class="level-item">
              <a
                class="button is-info is-outlined is-inverted is-rounded"
                href=""
              >
                Last week up voted
              </a>
            </li>
            <li class="level-item">
              <a
                class="button is-info is-outlined is-inverted is-rounded"
                href=""
              >
                Animals
              </a>
            </li>
            <li class="level-item">
              <a
                class="button is-info is-outlined is-inverted is-rounded"
                href=""
              >
                Cars
              </a>
            </li>
            <li class="level-item">
              <a
                class="button is-info is-outlined is-inverted is-rounded"
                href=""
              >
                Contacts
              </a>
            </li>
            <li class="level-item">
              <a
                class="button is-info is-outlined is-inverted is-rounded"
                href=""
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = {
  resetPagination: paginationActions.moveToFirst
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
