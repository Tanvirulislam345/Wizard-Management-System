import React from "react";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import AddPaymentForm from "../components/payment/AddPaymentForm";

const AddPayment = () => {
  return (
    <LayoutContiner>
      <SubNav2 project="Add Payment" />
      <AddPaymentForm />
    </LayoutContiner>
  );
};

export default AddPayment;
