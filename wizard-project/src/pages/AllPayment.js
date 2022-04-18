import React, { useEffect, useState } from "react";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";
import PaymentList from "../components/payment/PaymentList";

const AllPayment = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/allpayment")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);
  return (
    <LayoutContiner>
      <SubNav project="All Payment" addproject="addpayment" />
      <PaymentList rows={rows} />
    </LayoutContiner>
  );
};

export default AllPayment;
