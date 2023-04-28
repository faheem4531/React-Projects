import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  function ChangefilterHandler(selectYear) {
    setFilteredYear(selectYear);
  }

  const filteredExpenses = props.items.filter(expese => {
    return expese.date.getFullYear().toString() === filteredYear
  })

  let expenseContent = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={ChangefilterHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;