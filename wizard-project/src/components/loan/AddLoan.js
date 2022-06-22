import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContiner } from "../../styles/MetarialStyles";
import LoanForm from "./LoanForm";

const AddLoan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/employee")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  const handleSubmit = () => {
    axios.post("http://localhost:9000/addloan", data).then((res) => {
      navigate("/loan");
    });
  };
  return (
    <LayoutContiner>
      {employee !== null && (
        <LoanForm
          employee={employee}
          data={data}
          setData={setData}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default AddLoan;
