import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContiner } from "../../styles/MetarialStyles";
import SubNav2 from "../subNav/SubNav2";
import LoanForm from "./LoanForm";

const AddLoan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch("https://wiztecbd.online/api/employee")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  const handleSubmit = () => {
    axios.post("https://wiztecbd.online/api/addloan", data).then((res) => {
      navigate("/loan");
    });
  };
  return (
    <LayoutContiner>
      {employee !== null && (
        <>
          <SubNav2 project="Add Loan" />
          <LoanForm
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

export default AddLoan;
