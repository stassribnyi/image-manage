import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

import App from './pages/App';

import { Images, ImageEdit, ImageNew } from './pages/images';

import RouteWithSubRoutes from './RouteWithSubRoutes';

import registerServiceWorker from './registerServiceWorker';

const routes = [
  {
    path: '/',
    exact: true,
    component: Images
  },
  {
    path: '/new',
    component: ImageNew
  },
  {
    path: '/edit/:id',
    component: ImageEdit
  }
];

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </App>
    </Provider>
  </Router>,
  root
);

registerServiceWorker();
