import React, { useState } from "react";

import CardWarp from "../UI/CardWarp";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState('');
  const [enterUserAge, setEnterUserAge] = useState('');

  function addUserHandler(event) {
    event.preventDefault();
    if (enterUsername.trim().length === 0 || enterUserAge.trim().length === 0) {
      return;
    }
    if (enterUserAge < 1) {
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

  return (
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
  )
}

export default AddUser;