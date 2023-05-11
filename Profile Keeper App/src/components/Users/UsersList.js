import React from "react";

import CardWarp from "../UI/CardWarp";
import classes from './UsersList.module.css';

const Userslist = props => {
  return (
    <CardWarp className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={props.id}>
            {user.name} ({user.age} years old)
          </li>
        ))
        }
      </ul>
    </CardWarp>
  )
}

export default Userslist;