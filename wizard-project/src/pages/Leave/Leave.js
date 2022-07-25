import axios from "axios";
import React, { useEffect, useState } from "react";
import { LayoutContiner } from "../../styles/MetarialStyles";
import {
  HeadingFormatContainer,
  HeadingFormatTitle,
} from "../../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../../components/shared/ProfileNav/ProfileNav";
import AllLeave from "../../components/allLeaveDetails/AllLeave";
import LeaveTypeList from "../../components/allLeaveDetails/LeaveTypeList";
import { useAuth } from "../../Context/ContextProvieder";
import { Box } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

const Leave = () => {
  const { user } = useAuth();
  const [data, setData] = useState("All Leave");
  const navValue = ["Leave Type", "All Leave"];
  const [leaveType, setLeaveType] = useState(null);
  const [leave, setLeave] = useState(null);
  const [update, setUpdate] = useState(false);

  const handleChange = (id, type, method) => {
    if (method === "delete") {
      if (type === "leave") {
        axios
          .delete(`https://wizard-software-technology.rpi.gov.bd/leave/${id}`)
          .then((res) => {
            if (res.status === 200) {
              setLeave(leave?.filter((le) => le.id !== id));
            }
          });
      } else {
        axios
          .delete(
            `https://wizard-software-technology.rpi.gov.bd/leavetype/${id}`
          )
          .then((res) => {
            if (res.status === 200) {
              setLeaveType(leaveType?.filter((le) => le.id !== id));
            }
          });
      }
    } else {
      const data = { Status: type };
      axios
        .put(`https://wizard-software-technology.rpi.gov.bd/leave/${id}`, data)
        .then((res) => {
          if (res.status === 200) {
            setUpdate(!update);
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get("https://wizard-software-technology.rpi.gov.bd/leavetype")
      .then((res) => {
        setLeaveType(res.data);
      });

    axios
      .get("https://wizard-software-technology.rpi.gov.bd/leave")
      .then((res) => {
        if (user?.Role === "employee") {
          const data = res.data;
          const value = data.filter((da) => da.EmployeeId === user.EmployeeId);
          setLeave(value);
        } else {
          setLeave(res.data);
        }
      });
  }, [update]);

  return (
    <LayoutContiner style={{ paddingTop: "30px" }}>
      <HeadingFormatContainer>
        {user?.Role === "admin" ? (
          <ProfileNav navValue={navValue} data={data} setData={setData} />
        ) : (
          <ProfileNav navValue={["All Leave"]} data={data} setData={setData} />
        )}
      </HeadingFormatContainer>
      {leaveType !== null && data === "Leave Type" && (
        <Box sx={{ mt: 2 }}>
          {user?.Role !== "employee" && (
            <Link to={`/addleavetype`}>
              <HeadingFormatTitle
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "10px",
                }}
              >
                <AddBoxIcon color="secondary" />
              </HeadingFormatTitle>
            </Link>
          )}

          {leaveType?.length > 0 && (
            <LeaveTypeList rows={leaveType} handleChange={handleChange} />
          )}
        </Box>
      )}
      {data === "All Leave" && leave !== null && (
        <Box sx={{ mt: 2 }}>
          <Link to={`/addleave`}>
            <HeadingFormatTitle
              style={{
                display: "flex",
                justifyContent: "end",
                marginRight: "10px",
              }}
            >
              <AddBoxIcon color="secondary" />
            </HeadingFormatTitle>
          </Link>

          {leave?.length > 0 && (
            <AllLeave rows={leave} handleChange={handleChange} />
          )}
        </Box>
      )}
    </LayoutContiner>
  );
};

export default Leave;
