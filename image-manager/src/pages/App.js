import React from 'react';

import Modal from '../components/modal';
import Navbar from '../components/navbar';
import PWAPrompt from '../components/pwa-prompt';

import './App.css';

export default props => {
  return (
    <div>
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
    </div>
  );
};
