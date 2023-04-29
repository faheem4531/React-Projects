import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";;

function NewExpense(props) {
  const [isEdditing, setIsEdditing] = useState(false);

  function saveExpenseDataHandler(enterExpenseData) {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEdditing(false);
  }

  function startEditingHandler() {
    setIsEdditing(true);
  }
  function stopEdditingHandler() {
    setIsEdditing(false);
  }
  return (
    <div className="new-expense">
      {!isEdditing && (
        < button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdditingHandler}
        />)}
    </div >
  )
}

export default NewExpense;