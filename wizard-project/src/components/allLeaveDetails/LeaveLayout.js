import React, { useState } from "react";
import { LayoutContiner } from "../../styles/MetarialStyles";
import { HeadingFormatContainer } from "../shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../shared/ProfileNav/ProfileNav";
import SubNav from "../subNav/SubNav";
import AllLeave from "./AllLeave";
import LeaveTypeList from "./LeaveTypeList";

const LeaveLayout = ({ leave, leaveType, handleChange }) => {
  const [data, setData] = useState("All Leave");
  const navValue = ["Leave Type", "All Leave"];
  return (
    <LayoutContiner style={{ paddingTop: "30px" }}>
      <HeadingFormatContainer>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>
      {leaveType !== null && data === "Leave Type" && (
        <>
          <SubNav project="Leave Type" addproject="addleavetype" />
          <LeaveTypeList rows={leaveType} handleChange={handleChange} />
        </>
      )}
      {data === "All Leave" && leave !== null && (
        <>
          <SubNav project="Leave" addproject="addleave" />
          <AllLeave rows={leave} handleChange={handleChange} />
        </>
      )}
    </LayoutContiner>
  );
};

export default LeaveLayout;
