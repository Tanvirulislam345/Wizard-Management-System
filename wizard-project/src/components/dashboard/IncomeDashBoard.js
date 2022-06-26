import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Categori from "./Categori";
import * as XLSX from "xlsx";
import DashboardFilter from "./DashboardFilter";

const IncomeDashBoard = () => {
  const bank = [
    { id: 1, Item: "Cash" },
    { id: 2, Item: "City Bank" },
    { id: 3, Item: "Bank Asia" },
  ];
  const [income, setTotalIncome] = useState(0);
  const [adjustment, setAdjustment] = useState(0);
  const [expense, setTotalExpense] = useState(0);
  const [loan, setLoan] = useState(0);
  const [download, setDownload] = useState([]);
  const [filterValue, setFilterValue] = useState(null);

  const Income = { Name: "Income", Number: income };
  const Expense = { Name: "Expense", Number: expense };
  const Loan = { Name: "Loan", Number: loan };
  const Adjustment = { Name: "Adjustment", Number: adjustment };
  const Balance = {
    Name: "Balance",
    Number: income + adjustment - expense - loan,
  };

  const handleSearch = () => {
    if (filterValue !== null) {
      axios
        .post(`http://localhost:9000/income_categori_search`, filterValue)
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            let totalAmount;
            if (data.length > 1) {
              const newData = data.map((value) => {
                return value.Payment;
              });
              totalAmount = newData.reduce((pre, post) => pre + post);
            } else {
              totalAmount = data[0].Payment;
            }

            setTotalIncome(totalAmount);
            setDownload(data);
          } else {
            setTotalIncome(0);
          }
        });

      axios
        .post(`http://localhost:9000/expense_categori_search`, filterValue)
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

            setTotalExpense(totalAmount);
            setDownload(data);
          } else {
            setTotalExpense(0);
          }
        });

      axios
        .post(`http://localhost:9000/loan_search`, filterValue)
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            let totalAmount;
            if (data.length > 1) {
              const newData = data.map((value) => {
                return value.Amount;
              });
              totalAmount = newData.reduce((pre, post) => pre + post);
            } else {
              totalAmount = data[0].Amount;
            }

            setLoan(totalAmount);
            // setDownload(data);
          } else {
            setLoan(0);
          }
        });

      axios
        .post(`http://localhost:9000/adjustment_search`, filterValue)
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            let totalAmount;
            if (data.length > 1) {
              const newData = data.map((value) => {
                return value.Amount;
              });
              totalAmount = newData.reduce((pre, post) => pre + post);
            } else {
              totalAmount = data[0].Amount;
            }
            setAdjustment(totalAmount);
            // setDownload(data);
          } else {
            setAdjustment(0);
          }
        });
    }
  };
  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(download);
    XLSX.utils.book_append_sheet(wb, ws, "MyExpense");
    XLSX.writeFile(wb, "incomeExpense.xlsx");
  };
  return (
    <>
      <DashboardFilter
        employee={bank}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        handleSearch={handleSearch}
        handleDownload={handleDownload}
      />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Categori data={Income} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Categori data={Expense} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Categori data={Loan} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Categori data={Adjustment} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Categori data={Balance} />
        </Grid>
      </Grid>
    </>
  );
};

export default IncomeDashBoard;
