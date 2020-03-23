import React from 'react';

import { IconButton } from '../../components/icon-button';
import { Hero } from '../../components/hero';
import Gallery from './Gallery';

import { useImageContext } from '../../contexts/image';
import { useScroller } from '../../hooks';

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
  const scroller = useScroller();

  const handleGoUp = () => {
    scroller?.toTop(0);
  };

  return (
    <div className='main-page'>
      <Hero
        greeting='Welcome to'
        title='Cats Photo Gallery'
        subtitle="Here you will find lots of cat's photos from professional photographers all around the globe"
        links={links}
      />
      <section className='section'>
        <Gallery images={images} />
      </section>
      <IconButton
        to='#'
        iconName='fa-chevron-up'
        className='main-page__go-up'
        onClick={handleGoUp}
      />
      <IconButton
        to='/new'
        iconName='fa-plus'
        className='main-page__upload-image'
      />
    </div>
  );
};

export default MainPage;
