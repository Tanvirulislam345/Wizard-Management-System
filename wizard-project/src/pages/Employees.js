import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeList from "../components/employee/EmployeeList";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Employees = () => {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/employee")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  const handleRemove = (id) => {
    axios.delete(`http://localhost:9000/employee/delete/${id}`).then((res) => {
      if (res.status === 200) {
        setEmployee(employees.filter((emp) => emp.id !== id));
      }
    });
  };

  return (
    <LayoutContiner>
      <SubNav project="Employees" addproject="addemployee"></SubNav>

      <Grid container spacing={2}>
        {employees?.map((employee, index) => (
          <EmployeeList
            key={index}
            employee={employee}
            handleRemove={handleRemove}
          ></EmployeeList>
        ))}
      </Grid>
    </LayoutContiner>
  );
};

export default Employees;
