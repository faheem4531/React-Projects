import React, { useState } from "react";

import './ExpenseForm.css';

function ExpenseForm() {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');

  function titleChangeHandler(event) {
    setEnterTitle(event.target.value);
  }

  function numberChangeHandler(event) {
    setEnterAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnterDate(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate)
    }
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01" step="0.01"
            value={enterAmount}
            onChange={numberChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01" max="2023-12-31"
            value={enterDate}
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  )
}

export default ExpenseForm;