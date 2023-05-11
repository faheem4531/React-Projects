import React from "react";

import CardWarp from "./CardWarp";
import Button from "./Button";
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.OnConfirm} />
      <CardWarp className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.OnConfirm}>Okay</Button>
        </footer>
      </CardWarp>
    </div>
  )
}

export default ErrorModal;