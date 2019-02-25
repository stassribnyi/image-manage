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
      <Loader />
      <Navbar />
      <div className="container-fluid app-container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {props.children}
          </div>
        </div>
      </div>
      <Modal />
      <PWAPrompt />
      <AppNotifications />
    </div>
  );
};
