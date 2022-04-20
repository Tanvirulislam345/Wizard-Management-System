import axios from "axios";
import React, { useEffect, useState } from "react";
import ExpenseList from "../components/expense/ExpenseList";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const AllExpense = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/allexpense")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  const handleChange = (id) => {
    axios.delete(`http://localhost:9000/allexpense/${id}`).then((res) => {
      if (res.status === 200) {
        setRows(rows.filter((row) => row.id !== id));
      }
    });
  };

  return (
    <LayoutContiner>
      <SubNav project="Expense" addproject="addexpense" />
      <ExpenseList rows={rows} handleChange={handleChange} />
    </LayoutContiner>
  );
};

export default AllExpense;
