import React, { useEffect, useState } from "react";
import AllLeave from "../../components/allLeaveDetails/AllLeave";
import LeaveTypeList from "../../components/allLeaveDetails/LeaveTypeList";
import { HeadingFormatContainer } from "../../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../../components/shared/ProfileNav/ProfileNav";
import SubNav from "../../components/subNav/SubNav";
import { LayoutContiner } from "../../styles/MetarialStyles";

const Leave = () => {
  const [data, setData] = useState("All Leave");
  const navValue = ["Leave Type", "All Leave"];
  const [rows, setRows] = useState([]);

  const handleChange = (id) => {};
  return (
    <LayoutContiner style={{ paddingTop: "30px" }}>
      <HeadingFormatContainer>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>
      {data === "Leave Type" && (
        <>
          <SubNav project="Leave Type" addproject="addleavetype" />
          <LeaveTypeList rows={rows} handleChange={handleChange} />
        </>
      )}
      {data === "All Leave" && (
        <>
          <SubNav project="Leave" addproject="addleave" />
          <AllLeave rows={rows} handleChange={handleChange} />
        </>
      )}
    </LayoutContiner>
  );
};

export default Leave;
