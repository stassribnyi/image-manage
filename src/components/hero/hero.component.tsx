import React from 'react';

import { LevelNav } from '../level-nav';

import { HeroProps } from './hero.types';

import './hero.styles.scss';

const Hero: React.FC<HeroProps> = ({ greeting, title, subtitle, links }) => (
  <header className='hero'>
    <div className='hero-body'>
      <div className='container'>
        <div className='columns center-column'>
          <div className='column is-half has-text-centered'>
            <h1 className='title center-column'>
              <span className='title is-4 has-text-white'>{greeting}</span>
              <span className='title is-3 has-text-white'>{title}</span>
            </h1>
            <h2 className='title is-5 has-text-white'>{subtitle}</h2>
          </div>
        </div>
      </div>
    </div>
    <nav className='hero-foot'>
      <LevelNav links={links} />
    </nav>
  </header>
);

export default Hero;
