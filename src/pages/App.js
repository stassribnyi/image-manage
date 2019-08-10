import React from 'react';

import Modal from '../components/modal';
import Loader from '../components/loader';
import Navbar from '../components/navbar';
import PWAPrompt from '../components/pwa-prompt';
import AppNotifications from '../components/notifications';

import './App.css';

export default props => {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Navbar />
      <section className="section">
        <div className="container center">{props.children}</div>
      </section>
      {/* <Modal /> */}
      {/* <PWAPrompt /> */}
      {/* <AppNotifications /> */}
    </div>
  );
};
