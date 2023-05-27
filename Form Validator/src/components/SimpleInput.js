import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const nameInputIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameInputIsValid && enteredNameTouched;

  const emailInputIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !emailInputIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!nameInputIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  function nameInputBlurHandler(event) {
    setEnteredNameTouched(true);

  }

  function emailBlurHandler(event) {
    setEnteredEmailTouched(true);
  }

  function onChangeNameHandler(event) {
    setEnteredName(event.target.value);

  }

  function onChangeEmailHander(event) {
    setEnteredEmail(event.target.value);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={onChangeNameHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name field must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Gmail</label>
        <input
          type='email'
          id='email'
          onChange={onChangeEmailHander}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Enter your valid gmail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
