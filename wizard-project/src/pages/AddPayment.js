import React, { useEffect, useState } from "react";
import axios from "axios";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import AddPaymentForm from "../components/payment/AddPaymentForm";

const AddPayment = () => {
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    axios
      .get("https://wizard-software-technology.rpi.gov.bd/allproject")
      .then((res) => setProjectId(res.data));
  }, []);

  return (
    <LayoutContiner>
      <SubNav2 project="Add Payment" />
      {projectId !== null && <AddPaymentForm ProjectId={projectId} />}
    </LayoutContiner>
  );
};

export default AddPayment;
