import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef('');
  const [enteredName, setEnteredName] = useState('');

  function formSubmitHandler(event) {
    event.preventDefault();
    if (enteredName.trim() === '') {
      return;
    }
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName('');
  }

  function onChangeHandler(event) {
    setEnteredName(event.target.value);

  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={onChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
