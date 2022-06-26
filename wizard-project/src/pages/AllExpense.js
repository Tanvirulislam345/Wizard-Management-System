import axios from "axios";
import React, { useEffect, useState } from "react";
import ExpenseFilter from "../components/dashboard/ExpenseFilter";
import ExpenseCategoriList from "../components/expense/ExpenseCategoriList";
import ExpenseList from "../components/expense/ExpenseList";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";
import * as XLSX from "xlsx";
import DashboardFilter from "../components/dashboard/DashboardFilter";

const AllExpense = () => {
  const bank = [
    { id: 1, Item: "Cash" },
    { id: 2, Item: "City Bank" },
    { id: 3, Item: "Bank Asia" },
  ];
  const [filterValue, setFilterValue] = useState(null);
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

  // const handleChange = (id) => {
  //   axios.delete(`http://localhost:9000/allexpense/${id}`).then((res) => {
  //     if (res.status === 200) {
  //       setRows(rows.filter((row) => row.id !== id));
  //     }
  //   });
  // };

  const handleSearch = (id) => {
    axios.delete(`http://localhost:9000/allexpense/${id}`).then((res) => {
      if (res.status === 200) {
        setRows(rows.filter((row) => row.id !== id));
      }
    });

    if (filterValue !== null) {
      axios
        .post(`http://localhost:9000/expense_categori_search`, filterValue)
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            setRows(data);
          }
        });
    }
  };

  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "MyExpense");
    XLSX.writeFile(wb, "expense.xlsx");
  };

  return (
    <LayoutContiner>
      <HeadingFormatContainer sx={{ mb: 2 }}>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>

      {data === "Expense" && (
        <>
          <SubNav project="Expense" addproject="addexpense" />
          <DashboardFilter
            employee={bank}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            handleSearch={handleSearch}
            handleDownload={handleDownload}
          />
          {rows?.length > 0 && (
            <ExpenseList rows={rows} handleChange={handleSearch} />
          )}
        </>
      )}

      {data === "Expense Categori" && (
        <>
          <SubNav project="Expense Categori Create" addproject="addCategori" />
          {values !== null && <ExpenseCategoriList rows={values} />}
        </>
      )}
    </LayoutContiner>
  );
};

export default AllExpense;
