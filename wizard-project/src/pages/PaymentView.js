import React from "react";
import { useParams } from "react-router-dom";
import PaymentInvoice from "../components/payment/PaymentInvoice";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const PaymentView = () => {
  const { paymentId } = useParams();
  return (
    <LayoutContiner>
      <SubNav2 project="Payment View"></SubNav2>
      <PaymentInvoice />
    </LayoutContiner>
  );
};

export default PaymentView;
