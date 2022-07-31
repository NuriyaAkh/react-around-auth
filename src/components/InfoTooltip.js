import React from 'react';
import SuccessIcon from '../images/Checkmark.svg';
import ErrorIcon from '../images/ErrorIcon.svg';

const InfoToolTip = ({isOpen, onClose, status}) => {
  return (
    <div className={`forms ${isOpen ? 'forms_is-open' : ''}`}>
      <div className="forms__container">
        <button
          aria-label="close"
          type="button"
          className="forms__button-close"
          onClick={onClose}
        />
        <form className="form" noValidate>
          {status === 'success' ? (
            <div>
              <img
                className="form__icon"
                src={SuccessIcon}
                alt="checkmark icon"
              />
              <p className="form__status-message">
                Success! You have now been registered.
              </p>
            </div>
          ) : (
            <div>
              <img className="form__icon" src={ErrorIcon} alt="error icon" />
              <p className="form__status-message">
                Oops, something went wrong! Please try again.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default InfoToolTip;
