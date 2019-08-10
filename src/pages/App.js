import React from 'react';

import {
  NavBar,
  Modal,
  Loader,
  PWAPrompt,
  AppNotifications
} from '../components';

import './App.css';

export default props => {
  return (
    <div className="App">
      {/* <Loader /> */}
      <NavBar />
      <section className="section">
        <div className="container center">{props.children}</div>
      </section>
      {/* <Modal /> */}
      {/* <PWAPrompt /> */}
      {/* <AppNotifications /> */}
    </div>
  );
};
