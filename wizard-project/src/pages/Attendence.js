import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import AttendenceViewList from "../components/attendence/AttendenceViewList";
import FilterForm from "../components/attendence/FilterForm";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import SubNav from "../components/subNav/SubNav";
import { useAuth } from "../Context/ContextProvieder";
import { LayoutContiner } from "../styles/MetarialStyles";

const Attendence = () => {
  const { user } = useAuth();
  const [data, setData] = useState("Todays");
  const navValue = ["Privious", "Todays"];
  const [employee, setEmployee] = useState(null);
  const [values, setValues] = useState(null);
  const [todaysData, settodaysData] = useState(null);
  const [filterValue, setFilterValue] = useState(null);

  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate() + " " + monthNames[month] + " " + year;

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
      fetch(`http://localhost:9000/allattendence`)
        .then((res) => res.json())
        .then((data) => {
          if (user?.Role === "employee") {
            const value = data.filter(
              (da) => da.EmployeeId === user.EmployeeId
            );
            setValues(value);
            const value1 = data.filter(
              (da) => da.EmployeeId === user.EmployeeId && da.Date === date
            );
            settodaysData(value1);
          } else {
            setValues(data);
            const value1 = data?.filter((value) => value.Date === date);
            settodaysData(value1);
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
            setValues(value);
          } else {
            setValues(res.data);
          }
        } else {
          console.log("no search found");
        }
      });
  };

  return (
    <LayoutContiner>
      <SubNav project="Attendence" addproject="addattendence"></SubNav>
      {values !== null && todaysData !== null && (
        <>
          <HeadingFormatContainer>
            <ProfileNav navValue={navValue} data={data} setData={setData} />
            {employee && data === "Privious" && (
              <FilterForm
                employee={employee}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                handleSearch={handleSearch}
              />
            )}
          </HeadingFormatContainer>
          {data === "Todays" && <AttendenceViewList rows={todaysData} />}
          {data === "Privious" && <AttendenceViewList rows={values} />}
        </>
      )}
    </LayoutContiner>
  );
};

export default Attendence;
