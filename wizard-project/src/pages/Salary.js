import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import AttendenceViewList from "../components/attendence/AttendenceViewList";
import FilterForm from "../components/attendence/FilterForm";
import SalaryTable from "../components/salary/SalaryTable";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import SubNav2 from "../components/subNav/SubNav2";
import { useAuth } from "../Context/ContextProvieder";
import { LayoutContiner } from "../styles/MetarialStyles";
import * as XLSX from "xlsx";

const Salary = () => {
  const { user } = useAuth();
  const [employee, setEmployee] = useState(null);
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState("");
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/employee")
      .then((res) => res.json())
      .then((data) => {
        if (user?.Role === "employee") {
          const value = data.filter((da) => da.EmployeeId === user.EmployeeId);
          setEmployee(value);
        } else {
          setEmployee(data);
        }
      });

    if (user) {
      fetch(`http://localhost:9000/salary/present`)
        .then((res) => res.json())
        .then((data) => {
          if (user?.Role === "employee") {
            const value = data.filter(
              (da) => da.EmployeeId === user.EmployeeId
            );
            setErrors("");
            setValues(value);
          } else {
            setErrors("");
            setValues(data);
          }
        });
    }
  }, [user]);

  const handleSearch = () => {
    axios
      .post(`http://localhost:9000/salary/search`, filterValue)
      .then((res) => {
        if (res.data.length > 0) {
          if (user.Role === "employee") {
            let data = res.data;
            const value = data.filter(
              (da) => da.EmployeeId === user.EmployeeId
            );
            setErrors("");
            setValues(value);
          } else {
            setErrors("");
            setValues(res.data);
          }
        } else {
          setErrors("no search found");
        }
      });
  };

  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(values);
    XLSX.utils.book_append_sheet(wb, ws, "Mysheet");
    XLSX.writeFile(wb, "Salary.xlsx");
  };

  return (
    <LayoutContiner>
      <SubNav2 project="Salary"></SubNav2>
      {employee !== null && values !== null && (
        <>
          <HeadingFormatContainer>
            <FilterForm
              employee={employee}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              handleSearch={handleSearch}
              handleDownload={handleDownload}
            />
            {errors && (
              <Typography sx={{ mt: 2, color: "red" }}>{errors}</Typography>
            )}
          </HeadingFormatContainer>
          <SalaryTable rows={values} />
        </>
      )}
    </LayoutContiner>
  );
};

export default Salary;
