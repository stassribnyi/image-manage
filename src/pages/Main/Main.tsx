import React from 'react';

import { Hero } from '../../components/hero';
import Gallery from './Gallery';

import { useImageContext } from '../../contexts/image';

import './Main.scss';

const links = [
  { to: '/', name: 'All' },
  { to: '/favorites', name: 'Favorites' },
  { to: '/last-upvoted', name: 'Last week up voted' },
  { to: '/big', name: 'Big cats' },
  { to: '/with-humans', name: 'With humans' }
];

const MainPage: React.FC = props => {
  const { images } = useImageContext();

  return (
    <>
      <Hero
        greeting='Welcome to'
        title='Cats Photo Gallery'
        subtitle="Here you will find lots of cat's photos from professional photographers all around the globe"
        links={links}
      />
      <section className='section'>
        <div className='container center'>
          <Gallery images={images} />
        </div>
      </section>
      <a href='/' className='button is-rounded go-up'>
        ^
      </a>
      <a href='/new' className='button is-rounded new-image'>
        +
      </a>
    </>
  );
};

export default MainPage;
