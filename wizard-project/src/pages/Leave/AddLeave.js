import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddLeaveForm from "../../components/allLeaveDetails/AddLeaveForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddLeave = () => {
  const [data, setData] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [leaveType, setLeaveType] = useState(null);
  const navigation = useNavigate();

  const handleSubmit = () => {
    const newData = {
      ...data,
      Status: "Pendding",
    };
    axios.post("http://localhost:9000/addleave", newData).then((res) => {
      if (res.status === 200) {
        navigation("/leave");
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/employee")
      .then((res) => setEmployee(res.data));

    axios
      .get("http://localhost:9000/leavetype")
      .then((res) => setLeaveType(res.data));
  }, []);

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
