import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditEmployeeForm from "../components/employee/EditEmployeeForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EditEmployee = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(null);
  const [data, setData] = useState(null);
  const { employeetId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/employee/${employeetId}`)
      .then((res) => setValues(res.data[0]));
  }, [employeetId]);

  const handleSubmit = () => {
    if (data !== null) {
      axios
        .put(`http://localhost:9000/employee/${employeetId}`, data)
        .then((res) => {
          if (res.status === 200) {
            navigate("/employee");
          }
        });
    } else {
      alert("Does not change anything");
    }
  };
  return (
    <LayoutContiner>
      <SubNav2 project="Edit Project" />
      {values !== null && (
        <EditEmployeeForm
          data={data}
          setData={setData}
          values={values}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default EditEmployee;
