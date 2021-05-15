import React from "react";
import expenses from "../ListItem";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = () => {
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
