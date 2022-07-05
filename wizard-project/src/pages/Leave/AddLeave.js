import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddLeaveForm from "../../components/allLeaveDetails/AddLeaveForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { useAuth } from "../../Context/ContextProvieder";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddLeave = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [leaveType, setLeaveType] = useState(null);
  const navigation = useNavigate();

  const handleSubmit = () => {
    const newData = {
      ...data,
      Status: "Pendding",
    };

    axios
      .post("https://wizard-software-technology.rpi.gov.bd/addleave", newData)
      .then((res) => {
        if (res.status === 200) {
          if (user?.Role === "employee") {
            navigation(`/employee/profile/${user?.id}`);
          } else {
            navigation("/leave");
          }
        }
      });
  };

  useEffect(() => {
    if (user) {
      axios
        .get("https://wizard-software-technology.rpi.gov.bd/employee")
        .then((res) => {
          if (user?.Role === "employee") {
            const data = res.data;
            const value = data.filter(
              (da) => da.EmployeeId === user?.EmployeeId
            );
            setEmployee(value);
          } else {
            setEmployee(res.data);
          }
        });
    }

    axios
      .get("https://wizard-software-technology.rpi.gov.bd/leavetype")
      .then((res) => setLeaveType(res.data));
  }, [user]);

  const values = leaveType?.filter((leave) => leave.Status === "Active");

  return (
    <LayoutContiner>
      <SubNav2 project="Add Leave" />
      {employee !== null && leaveType !== null && (
        <AddLeaveForm
          data={data}
          setData={setData}
          employee={employee}
          leaveTypes={values}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default AddLeave;
