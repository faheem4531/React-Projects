import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameInputIsValid && enteredNameTouched;

  function formSubmitHandler(event) {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!nameInputIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  function nameInputBlurHandler(event) {
    setEnteredNameTouched(true);

  }

  function onChangeHandler(event) {
    setEnteredName(event.target.value);

  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={onChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name field must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
