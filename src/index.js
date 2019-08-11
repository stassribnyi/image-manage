import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.min.css';
import './index.css';

import store from './store';

import App from './pages/App';

// import { Images, Image } from './pages/images';
import MainPage from './pages/Main';

import RouteWithSubRoutes from './RouteWithSubRoutes';

import registerServiceWorker from './registerServiceWorker';

const routes = [
  {
    path: '/',
    exact: true,
    component: MainPage
  },
  // {
  //   path: '/new',
  //   component: Image
  // },
  // {
  //   path: '/edit/:id',
  //   component: Image
  // }
];

const root = document.getElementById('root');

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
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
