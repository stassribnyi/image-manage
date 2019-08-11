import React from 'react';

import LevelNav from '../../../components/LevelNav';

import './Hero.css';

export default props => (
  <header className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns center-column">
          <div className="column is-half">
            <h1 className="title center-column">
              <span className="title is-4 has-text-white">Welcome to</span>
              <span className="title is-3 has-text-white">
                Cats Photo Gallery
              </span>
            </h1>
            <h2 className="title is-5 has-text-white has-text-centered">
              Here you will find lots of cat's photos from professional
              photographers all around the globe
            </h2>
          </div>
        </div>
      </div>
    </div>
    <nav className="hero-foot">
      <LevelNav links={props.links} />
    </nav>
  </header>
);
