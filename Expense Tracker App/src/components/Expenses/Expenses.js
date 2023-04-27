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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={ChangefilterHandler}
        />
        {props.items.map((expense) => (
          < ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />))}
      </Card>
    </div>
  );
}

export default Expenses;