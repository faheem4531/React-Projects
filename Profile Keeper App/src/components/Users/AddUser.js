import React from "react";

import CardWarp from "../UI/CardWarp";
import Button from "../UI/Button";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  function addUserHandler(event) {
    event.preventDefault();
  }

  return (
    <CardWarp className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </CardWarp>
  )
}

export default AddUser;