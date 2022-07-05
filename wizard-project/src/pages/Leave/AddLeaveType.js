import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddLeaveTypeForm from "../../components/allLeaveDetails/AddLeaveTypeForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddLeaveType = () => {
  const [data, setData] = useState(null);
  const navigation = useNavigate();

  const handleSubmit = () => {
    axios
      .post("https://wizard-software-technology.rpi.gov.bd/addleavetype", data)
      .then((res) => {
        if (res.status === 200) {
          navigation("/leave");
        }
      });
  };

  return (
    <LayoutContiner>
      <SubNav2 project="Add Leave Type" />

      <AddLeaveTypeForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default AddLeaveType;
