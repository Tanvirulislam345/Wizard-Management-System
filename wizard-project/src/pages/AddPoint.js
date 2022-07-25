import React, { useEffect, useState } from "react";
import axios from "axios";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import AddPaymentForm from "../components/payment/AddPaymentForm";
import AddPointForm from "../components/point/AddPointForm";

const AddPoint = () => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9000/employee")
      .then((res) => setEmployee(res.data));
  }, []);

  return (
    <LayoutContiner>
      <SubNav2 project="Add Point" />
      {employee !== null && <AddPointForm employee={employee} />}
    </LayoutContiner>
  );
};

export default AddPoint;
