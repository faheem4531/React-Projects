import React, { isValidElement, useRef, useState } from 'react';


import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValild] = useState(true);
  const amountInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;  // to convert string number into number (change data type)

    if (enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 1) {
      setAmountIsValild(false);
      return; // if condition unmatch min-max items then return the condition
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          ref: { amountInputRef },
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button >+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm;