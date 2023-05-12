import React, { useState, Fragment } from "react";

import CardWarp from "../UI/CardWarp";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState('');
  const [enterUserAge, setEnterUserAge] = useState('');
  const [error, setError] = useState();


  function addUserHandler(event) {
    event.preventDefault();
    if (enterUsername.trim().length === 0 || enterUserAge.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age' });
      return;
    }
    if (enterUserAge < 1) {
      setError({ title: 'Invalid age', message: 'please enter a valid age (> 0).' });
      return;
    }
    props.onAddUser(enterUsername, enterUserAge);
    setEnterUsername('');
    setEnterUserAge('');
  }

  function handleUsername(event) {
    setEnterUsername(event.target.value);
  }

  function handleUserAge(event) {
    setEnterUserAge(event.target.value);
  }

  function errorHander() {
    setError(null);
  }
  return (
    <Fragment>
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
            value={enterUsername}
            onChange={handleUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enterUserAge}
            onChange={handleUserAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </CardWarp>
    </Fragment>
  )
}

export default AddUser;