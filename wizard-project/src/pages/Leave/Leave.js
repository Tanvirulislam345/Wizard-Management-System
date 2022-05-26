import axios from "axios";
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
  const [leaveType, setLeaveType] = useState(null);
  const [leave, setLeave] = useState(null);
  const [update, setUpdate] = useState(false);

  const handleChange = (id, type, method) => {
    if (method === "delete") {
      if (type === "leave") {
        axios.delete(`http://localhost:9000/leave/${id}`).then((res) => {
          if (res.status === 200) {
            setLeave(leave?.filter((le) => le.id !== id));
          }
        });
      } else {
        axios.delete(`http://localhost:9000/leavetype/${id}`).then((res) => {
          if (res.status === 200) {
            setLeaveType(leaveType?.filter((le) => le.id !== id));
          }
        });
      }
    } else {
      const data = { Status: type };
      // console.log(id, type, method, data);
      axios.put(`http://localhost:9000/leave/${id}`, data).then((res) => {
        if (res.status === 200) {
          setUpdate(!update);
        }
      });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:9000/leavetype").then((res) => {
      setLeaveType(res.data);
    });

    axios.get("http://localhost:9000/leave").then((res) => {
      setLeave(res.data);
    });
  }, [update]);

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

export default Leave;
