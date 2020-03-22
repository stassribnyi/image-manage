import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

import { BaseLayout } from './layouts/base-layout';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

const root = document.getElementById('root');

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <BaseLayout>
        <Routes />
      </BaseLayout>
    </Provider>
  </Router>,
  root
);

registerServiceWorker();
