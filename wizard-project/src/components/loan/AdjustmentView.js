import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Categori from "../dashboard/Categori";
import LoanFilter from "./LoanFilter";
import LoanTable from "./LoanTable";
import * as XLSX from "xlsx";

const AdjustmentView = () => {
  const [rows, setRows] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [loan, setLoan] = useState(null);
  const [errors, setErrors] = useState(null);
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9000/adjustment")
      .then((res) => setRows(res.data));

    axios
      .get("http://localhost:9000/employee")
      .then((res) => setEmployee(res.data));
  }, []);

  const handleChange = () => {};

  const handleSearch = () => {
    axios
      .post(`http://localhost:9000/adjustment_search`, filterValue)
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
          const Loan = { Name: "Adjustment", Number: totalAmount };
          setLoan(Loan);
          // setDownload(data);
        } else {
          setErrors("No Adjustment found");
        }
      });
  };
  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "My Adjustment");
    XLSX.writeFile(wb, "Adjustment.xlsx");
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

      {loan !== null && (
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Categori data={loan} />
          </Grid>
        </Grid>
      )}
      {rows?.length > 0 && (
        <LoanTable rows={rows} handleChange={handleChange} />
      )}
    </div>
  );
};

export default AdjustmentView;
