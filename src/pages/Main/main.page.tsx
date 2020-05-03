import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { IconButton, Gallery, Hero, Spinner } from '../../components';
import { useImageContext } from '../../contexts';
import { useScroller } from '../../hooks';

import './main.styles.scss';

const links = [
  { to: '/', name: 'All' },
  { to: '/favorites', name: 'Favorites' },
  { to: '/last-upvoted', name: 'Last week up voted' },
  { to: '/big', name: 'Big cats' },
  { to: '/with-humans', name: 'With humans' }
];

const MainPage: React.FC = () => {
  const { hasMore, images, loadPage } = useImageContext();
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
      <InfiniteScroll
        element='section'
        className='section'
        pageStart={0}
        initialLoad={true}
        loadMore={loadPage}
        hasMore={hasMore}
        loader={<Spinner key={0} />}
      >
        <Gallery images={images} />
        {!hasMore && (
          <div className='has-text-centered'>
            <button className='button is-text'>Load more...</button>
          </div>
        )}
      </InfiniteScroll>

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
