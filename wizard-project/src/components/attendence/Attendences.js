import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeadingFormatContainer } from "../shared/HeadingFormat/HeadingFormatStyle";
import FilterForm from "./FilterForm";
import AttendenceViewList from "./AttendenceViewList";
import { useAuth } from "../../Context/ContextProvieder";

const Attendences = () => {
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
      fetch(`http://localhost:9000/allattendence/present`)
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
      .post(`http://localhost:9000/allattendence/search`, filterValue)
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

  return (
    <>
      {employee !== null && values !== null && (
        <>
          <HeadingFormatContainer>
            <FilterForm
              employee={employee}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              handleSearch={handleSearch}
            />
            {errors && (
              <Typography sx={{ mt: 2, color: "red" }}>{errors}</Typography>
            )}
          </HeadingFormatContainer>
          {values !== null && values?.length > 0 && (
            <AttendenceViewList rows={values} />
          )}
        </>
      )}
    </>
  );
};

export default Attendences;
