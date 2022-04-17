import React from "react";
import ExpenseList from "../components/expense/ExpenseList";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const AllExpense = () => {
  return (
    <LayoutContiner>
      <SubNav2 project="Expense" />
      <ExpenseList />
    </LayoutContiner>
  );
};

export default AllExpense;
