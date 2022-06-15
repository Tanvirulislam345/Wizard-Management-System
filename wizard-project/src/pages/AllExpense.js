import axios from "axios";
import React, { useEffect, useState } from "react";
import ExpenseCategoriList from "../components/expense/ExpenseCategoriList";
import ExpenseList from "../components/expense/ExpenseList";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const AllExpense = () => {
  const [rows, setRows] = useState([]);
  const [values, setValues] = useState(null);
  const [data, setData] = useState("Expense");
  const navValue = ["Expense", "Expense Categori"];

  useEffect(() => {
    fetch("http://localhost:9000/allexpense")
      .then((res) => res.json())
      .then((data) => setRows(data));

    axios
      .get(`http://localhost:9000/expense_categori`)
      .then((res) => setValues(res.data));
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
      <HeadingFormatContainer sx={{ mb: 2 }}>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>

      {data === "Expense" && rows?.length > 0 && (
        <>
          <SubNav project="Expense" addproject="addexpense" />
          <ExpenseList rows={rows} handleChange={handleChange} />
        </>
      )}
      {data === "Expense Categori" && values !== null && (
        <>
          <SubNav project="Expense Categori Create" addproject="addCategori" />
          <ExpenseCategoriList rows={values} />
        </>
      )}
    </LayoutContiner>
  );
};

export default AllExpense;
