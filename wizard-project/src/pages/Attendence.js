import React, { useEffect, useState } from "react";
import AttendenceViewList from "../components/attendence/AttendenceViewList";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Attendence = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:9000/allattendence`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <LayoutContiner>
      <SubNav project="Attendence" addproject="addattendence"></SubNav>
      {data !== null && <AttendenceViewList rows={data} />}
    </LayoutContiner>
  );
};

export default Attendence;
