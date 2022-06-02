import React, { useEffect, useState, useRef } from "react";
import AttendenceViewList from "../components/attendence/AttendenceViewList";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import SubNav from "../components/subNav/SubNav";
import { useAuth } from "../Context/ContextProvieder";
import { LayoutContiner } from "../styles/MetarialStyles";

const Attendence = () => {
  const { user } = useAuth();
  const [data, setData] = useState("Todays");
  const navValue = ["Privious", "Todays"];
  const [values, setValues] = useState(null);
  const [todaysData, settodaysData] = useState(null);

  const date = new Date();
  const todaysDate = new Intl.DateTimeFormat(["ban", "id"]).format(date);
  // console.log(todaysDate);

  useEffect(() => {
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
              (da) =>
                da.EmployeeId === user.EmployeeId && da.Date === todaysDate
            );
            settodaysData(value1);
          } else {
            setValues(data);
            const value1 = data?.filter((value) => value.Date === todaysDate);
            settodaysData(value1);
          }
        });
    }
  }, [user]);

  return (
    <LayoutContiner>
      <SubNav project="Attendence" addproject="addattendence"></SubNav>
      {values !== null && todaysData !== null && (
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
