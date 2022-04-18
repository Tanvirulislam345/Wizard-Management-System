import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEmployeeForm from "../components/employee/AddEmployeeForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const AddEmployee = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (data !== null) {
      axios.post("http://localhost:9000/addemployee", data).then((res) => {
        if (res.status === 200) {
          navigate("/employee");
        }
      });
    } else {
      alert("Please Enter all data");
    }
  };

  return (
    <LayoutContiner>
      {/* Subnav  */}
      <SubNav2 project="Add Employee" />
      <AddEmployeeForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default AddEmployee;
