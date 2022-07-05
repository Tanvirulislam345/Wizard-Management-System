import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContiner } from "../../styles/MetarialStyles";
import SubNav2 from "../subNav/SubNav2";
import LoanAdjustmentForm from "./LoanAdjustmentForm";

const AddAdjustment = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch("https://wizard-software-technology.rpi.gov.bd/employee")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  const handleSubmit = () => {
    axios
      .post("https://wizard-software-technology.rpi.gov.bd/addadjustment", data)
      .then((res) => {
        navigate("/loan");
      });
  };

  return (
    <LayoutContiner>
      {employee !== null && (
        <>
          <SubNav2 project="Add Adjustment" />
          <LoanAdjustmentForm
            employee={employee}
            data={data}
            setData={setData}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </LayoutContiner>
  );
};

export default AddAdjustment;
