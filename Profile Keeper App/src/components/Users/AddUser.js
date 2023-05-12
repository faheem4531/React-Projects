import React, { useRef, useState } from "react";

import CardWarp from "../UI/CardWarp";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();

  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    const userNameInput = userNameRef.current.value;
    const userAgeInput = userAgeRef.current.value;

    if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age' });
      return;
    }
    if (userAgeInput < 1) {
      setError({ title: 'Invalid age', message: 'please enter a valid age (> 0).' });
      return;
    }
    props.onAddUser(userNameInput, userAgeInput);
    userNameRef.current.value = '';
    userAgeRef.current.value = '';
  }

  function errorHander() {
    setError(null);
  }
  return (
    <div>
      {error &&
        <ErrorModal
          title={error.title}
          message={error.message}
          OnConfirm={errorHander}
        />}
      <CardWarp className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={userNameRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={userAgeRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </CardWarp>
    </div>
  )
}

export default AddUser;