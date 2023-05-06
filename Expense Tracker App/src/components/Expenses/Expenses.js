import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  function ChangefilterHandler(selectYear) {
    setFilteredYear(selectYear);
  }

  const filteredExpenses = props.items.filter(expese => {
    return expese.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={ChangefilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;