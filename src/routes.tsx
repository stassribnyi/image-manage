import React from 'react';
import MainPage from './pages/Main';

import { Route, RouteProps, Switch } from 'react-router-dom';

const ROUTES: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: MainPage
  }
];

const Routes: React.FC = () => (
  <Switch>
    {ROUTES.map((route, idx) => (
      <Route key={idx} {...route} />
    ))}
  </Switch>
);

export default Routes;
