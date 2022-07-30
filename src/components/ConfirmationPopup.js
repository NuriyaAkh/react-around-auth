import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function ConfirmationPopup({
  isOpen,
  onUpdate,
  onClose,
  card,
  buttonText,
}) {
  function handleCardDeleteSubmit(evt) {
    evt.preventDefault();
    console.log('yes to delete');
    onUpdate(card);
  };

  return (
    <PopupWithForm
      title="Are you sure?"
      name="confirm-form"
      buttonText={buttonText}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleCardDeleteSubmit}
    children ={
      
<div className="forms" id="confirm-popup">
  <div className="forms__container">
    <button
      aria-label="close"
      type="button"
      className="forms__button-close"
    ></button>
    <form className="form" name="confirm-form" id="confirm-form" novalidate>
      <h3 className="forms__title">Are you sure?</h3>
      <button type="submit" className="form__button">
        Yes
      </button>
    </form>
  </div>
</div>}
/>
);
}