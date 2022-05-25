import React, { useState } from "react";
import AddLeaveTypeForm from "../../components/allLeaveDetails/AddLeaveTypeForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddLeaveType = () => {
  const [data, setData] = useState(null);
  const handleSubmit = () => {};

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
