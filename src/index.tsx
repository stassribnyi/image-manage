import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { BaseLayout } from './layouts/base-layout';
import { ImageProvider } from './contexts/image';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import './index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ImageProvider>
      <BaseLayout>
        <Routes />
      </BaseLayout>
    </ImageProvider>
  </Router>,
  root
);

registerServiceWorker();
