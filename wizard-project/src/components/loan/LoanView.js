import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Categori from "../dashboard/Categori";
import LoanFilter from "./LoanFilter";
import LoanTable from "./LoanTable";
import * as XLSX from "xlsx";

const LoanView = () => {
  const [rows, setRows] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [loan, setLoan] = useState(0);
  const [adjustment, setAdjustment] = useState(0);
  const [errors, setErrors] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const LoanValue = { Name: "Present Loan", Number: loan - adjustment };

  useEffect(() => {
    axios
      .get("https://wizard-software-technology.rpi.gov.bd/loan")
      .then((res) => setRows(res.data));

    axios
      .get("https://wizard-software-technology.rpi.gov.bd/employee")
      .then((res) => setEmployee(res.data));
  }, []);

  const handleChange = () => {};

  const handleSearch = () => {
    axios
      .post(
        `https://wizard-software-technology.rpi.gov.bd/loan_search`,
        filterValue
      )
      .then((res) => {
        if (res.data.length > 0) {
          const data = res.data;
          setRows(data);
          let totalAmount;
          if (data.length > 1) {
            const newData = data.map((value) => {
              return value.Amount;
            });
            totalAmount = newData.reduce((pre, post) => pre + post);
          } else {
            totalAmount = data[0].Amount;
          }
          setErrors(null);

          setLoan(totalAmount);
          // setDownload(data);
        } else {
          setLoan(0);
          setErrors("No  Loan found");
        }
      });

    axios
      .post(
        `https://wizard-software-technology.rpi.gov.bd/adjustment_search`,
        filterValue
      )
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
          setErrors(null);
          setAdjustment(totalAmount);
          // setDownload(data);
        } else {
          setAdjustment(0);
          setErrors("No Adjustment found");
        }
      });
  };
  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "My Loan");
    XLSX.writeFile(wb, "Loan.xlsx");
  };

  return (
    <div>
      <LoanFilter
        employee={employee}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        handleSearch={handleSearch}
        handleDownload={handleDownload}
      />
      {errors !== null && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p style={{ color: "red" }}>{errors}</p>
          </Grid>
        </Grid>
      )}

      {(loan !== 0 || adjustment !== 0) && (
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Categori data={LoanValue} />
          </Grid>
        </Grid>
      )}
      {rows?.length > 0 && (
        <LoanTable rows={rows} handleChange={handleChange} />
      )}
    </div>
  );
};

export default LoanView;
