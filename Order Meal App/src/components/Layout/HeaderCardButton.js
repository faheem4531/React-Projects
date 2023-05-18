import React from "react";

import classes from './HeaderCardButton.module.css';
import CartIcon from "../Card/CardIcon";

const HeaderCardButton = props => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCardButton;