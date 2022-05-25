import React, { useState } from "react";
import AddLeaveForm from "../../components/allLeaveDetails/AddLeaveForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddLeave = () => {
  const [data, setData] = useState(null);
  const handleSubmit = () => {};

  return (
    <LayoutContiner>
      <SubNav2 project="Add Leave" />

      <AddLeaveForm data={data} setData={setData} handleSubmit={handleSubmit} />
    </LayoutContiner>
  );
};

export default AddLeave;
