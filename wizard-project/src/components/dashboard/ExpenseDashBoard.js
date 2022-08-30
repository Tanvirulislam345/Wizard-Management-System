import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Categori from "./Categori";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseDashBoard = () => {
  const [filterValue, setFilterValue] = useState(null);
  const [categori, setCategori] = useState(null);
  const [totalExpense, setTotalExpense] = useState(null);
  const [errors, setErrors] = useState(null);
  const [download, setDownload] = useState(null);

  useEffect(() => {
    axios.get(`https://wiztecbd.online/api/expense_categori`).then((res) => {
      setCategori(res.data);
    });
  }, []);

  const handleSearch = () => {
    if (filterValue !== null) {
      axios
        .post(
          `https://wiztecbd.online/api/expense_categori_search`,
          filterValue
        )
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            let totalAmount;
            if (data.length > 1) {
              const newData = data.map((value) => {
                return value.TotalAmount;
              });
              totalAmount = newData.reduce((pre, post) => pre + post);
            } else {
              totalAmount = data[0].TotalAmount;
            }
            setErrors(null);
            setDownload(data);
            setTotalExpense({ Name: "Total Expense", Number: totalAmount });
          } else {
            setErrors("No Search found");
          }
        });
    }
  };

  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(download);
    XLSX.utils.book_append_sheet(wb, ws, "MyExpense");
    XLSX.writeFile(wb, "expense.xlsx");
  };
  return (
    <>
      {categori !== null && (
        <ExpenseFilter
          employee={categori}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          handleSearch={handleSearch}
          handleDownload={handleDownload}
        />
      )}

      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          {totalExpense !== null && <Categori data={totalExpense} />}
          {errors !== null && <p style={{ color: "red" }}>{errors}</p>}
        </Grid>
      </Grid>
    </>
  );
};

export default ExpenseDashBoard;
