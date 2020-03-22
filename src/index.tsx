import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import { BaseLayout } from './layouts/base-layout';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

const root = document.getElementById('root');

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <BaseLayout>
      <Routes />
    </BaseLayout>
  </Router>,
  root
);

registerServiceWorker();
