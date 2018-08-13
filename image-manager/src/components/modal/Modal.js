import React from 'react';
import { connect } from 'react-redux';

import './Modal.css';

const Modal = props => {
  const { title, show, body } = props;
  const { submitName, onSubmit, closeName, onClose } = props;

  const modalClass = show ? 'show d-block' : 'd-none';
  const backdropClass = show ? 'show' : 'd-none';

  return (
    <div>
      <div className={`modal ${modalClass}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">
              {onSubmit ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  {submitName}
                </button>
              ) : null}
              {onClose ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  {closeName}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop ${backdropClass}`} />
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(Modal);
