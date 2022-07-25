import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditLeaveForm from "../../components/allLeaveDetails/EditLeaveForm";
import EditLeaveTypeForm from "../../components/allLeaveDetails/EditLeaveTypeForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const EditLeaveType = () => {
  const [data, setData] = useState(null);
  const [values, setValues] = useState(null);
  const navigation = useNavigate();
  const { leavetypeId } = useParams();

  const handleSubmit = () => {
    axios
      .put(
        `http://localhost:9000/leavetype/${leavetypeId}`,
        data
      )
      .then((res) => {
        if (res.status === 200) {
          navigation("/leave");
        }
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:9000/leavetype/${leavetypeId}`
      )
      .then((res) => setValues(res.data));
  }, []);

  return (
    <LayoutContiner>
      <SubNav2 project="Update LeaveType" />
      {values !== null && (
        <EditLeaveTypeForm
          data={data}
          setData={setData}
          values={values}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default EditLeaveType;
