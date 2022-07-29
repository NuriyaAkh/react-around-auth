import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useFormAndValidation } from './FormValidator';

/**
 * The **Login** component will let users signin to the web application.
**/
const Login = ({
  isOpen,
  onClose,
  onSubmit,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
}) => {
  // const { isValid, errors, handleChange, resetForm } = useFormAndValidation([
  //   'login-email',
  //   'login-password',
  // ]);

  // const formRef = useRef(null);
  // const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   setIsFormValid(formRef.current.checkValidity());
  // }, [isOpen, formRef]);

  const handleFormChange = () => {
    setIsFormValid(formRef.current.checkValidity());
  };

  // Reset form values every time the popup opens
  useEffect(() => {
    const initialValues = {
      'login-email': '',
      'login-password': '',
    };
    setLoginEmail('');
    setLoginPassword('');
    resetForm({ ...initialValues }, { ...initialValues }, true);
  }, [resetForm, setLoginEmail, setLoginPassword]);

  const handleInputChange = (e) => {
    if (e.target.name === 'login-email') {
      setLoginEmail(e.target.value);
    }
    if (e.target.name === 'login-password') {
      setLoginPassword(e.target.value);
    }
    handleChange(e);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValid || (loginEmail && loginPassword)) {
      onSubmit({ email: loginEmail, password: loginPassword });
    }
  };

  const emailInputClassName = ``;
  const emailErrorClassName = ``;
  const passwordInputClassName = ``;
  const passwordErrorClassName = ``;
  const submitButtonClassName = `form__submit-button ${!isFormValid && 'form__submit-button_disabled'
    }`;

    return (
      <PopupWithForm
        title="Login"
        name="login-form"
        formId="login"
        onSubmit={handleFormSubmit}
        isOpen={isOpen}
        onClose={onClose}
        buttonText={buttonText}
        activeButton={isNameValid && isDescriptionValid}
        children={
          <>
            <input
              type="email"
              className={`form__input ${
                isNameValid ? '' : 'form__input_type_error'
              }`}
              id="login-email"
              name="login-email"
              placeholder="Email"
              required
              minLength="2"
              maxLength="40"
              value={loginEmail}
              onChange={handleInputChange}
            />
  
            <span
              className={`username-input-error ${
                isNameValid ? '' : 'form__error-text_active'
              }`}
            >
              {errorMessage.name}
            </span>
            <input
              type="password"
              className="form__input "
              id="login-password"
              name="login-password"
              placeholder="Password"
              required
              minLength="8"
              maxLength="200"
              value={loginPassword}
              onChange={handleInputChange}
            />
            <span
              className={`about-input-error ${
                isDescriptionValid ? '' : 'form__error-text_active'
              }`}
            >
              {errorMessage.description}
            </span>
          </>
        }
      />
    );
  }
  export default Login;