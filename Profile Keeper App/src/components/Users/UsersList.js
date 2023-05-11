import React from "react";

import CardWarp from "../UI/CardWarp";
import classes from './UsersList.module.css';

const Userslist = props => {
  return (
    <CardWarp className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <lil>
            {user.name} ({user.age} years old)
          </lil>
        ))
        }
      </ul>
    </CardWarp>
  )
}

export default Userslist;