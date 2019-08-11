import React from 'react';

import Hero from './Hero';
import Gallery from './Gallery';

import './Main.css';

const links = [
  { to: '/', name: 'All' },
  { to: '/favorites', name: 'Favorites' },
  { to: '/last-upvoted', name: 'Last week up voted' },
  { to: '/big', name: 'Big cats' },
  { to: '/with-humans', name: 'With humans' }
];

export default props => (
  <>
    <Hero links={links} />
    <section className="section">
      <div className="container center">
        <Gallery />
      </div>
    </section>
    <a href="/" className="button is-rounded go-up">
      ^
    </a>
    <a href="/new" className="button is-rounded new-image">
      +
    </a>
  </>
);
