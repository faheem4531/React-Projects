import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);


  function formSubmitHandler(event) {
    event.preventDefault();
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName('');
  }

  function onChangeHandler(event) {
    setEnteredName(event.target.value);

  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={onChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p className="error-text">Name field must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
