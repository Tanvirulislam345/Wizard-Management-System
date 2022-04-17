import React from "react";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";
import PaymentList from "../components/payment/PaymentList";

const AllPayment = () => {
  return (
    <LayoutContiner>
      <SubNav project="All Payment" addproject="addpayment" />
      <PaymentList />
    </LayoutContiner>
  );
};

export default AllPayment;
