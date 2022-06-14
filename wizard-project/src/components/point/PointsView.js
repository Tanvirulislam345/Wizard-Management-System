import { Typography } from "@mui/material";
import axios from "axios";
import FilterForm from "../attendence/FilterForm";
import React, { useEffect, useState } from "react";
import { HeadingFormatContainer } from "../shared/HeadingFormat/HeadingFormatStyle";
import { useAuth } from "../../Context/ContextProvieder";
import * as XLSX from "xlsx";
import PointViewList from "./PointViewList";

const PointsView = () => {
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

    axios
      .get(`http://localhost:9000/points`)
      .then((res) => setValues(res.data));
  }, [user]);

  const handleSearch = () => {
    axios.post(`http://localhost:9000/points/view`, filterValue).then((res) => {
      if (res.data.length > 0) {
        if (user.Role === "employee") {
          let data = res.data;
          const value = data.filter((da) => da.EmployeeId === user.EmployeeId);
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
    XLSX.writeFile(wb, "Attendence.xlsx");
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
              handleDownload={handleDownload}
            />
            {errors && (
              <Typography sx={{ mt: 2, color: "red" }}>{errors}</Typography>
            )}
          </HeadingFormatContainer>
          {values !== null && values?.length > 0 && (
            <PointViewList rows={values} />
          )}
        </>
      )}
    </>
  );
};

export default PointsView;
