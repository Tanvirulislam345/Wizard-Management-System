import { Button } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import AttendenceViewList from "../components/attendence/AttendenceViewList";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Attendence = () => {
  const [data, setData] = useState("Todays");
  const navValue = ["Privious", "Todays"];
  const [values, setValues] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/allattendence`)
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, []);

  const date = new Date();
  const todaysDate = new Intl.DateTimeFormat(["ban", "id"]).format(date);
  // console.log(todaysDate);
  const todaysData = values?.filter((value) => value.Date === todaysDate);

  return (
    <LayoutContiner>
      <SubNav project="Attendence" addproject="addattendence"></SubNav>
      {values !== null && (
        <>
          <HeadingFormatContainer
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <ProfileNav navValue={navValue} data={data} setData={setData} />
          </HeadingFormatContainer>
          {data === "Todays" && <AttendenceViewList rows={todaysData} />}
          {data === "Privious" && <AttendenceViewList rows={values} />}
        </>
      )}
    </LayoutContiner>
  );
};

export default Attendence;
