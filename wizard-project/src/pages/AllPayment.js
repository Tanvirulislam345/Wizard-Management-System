import React, { useEffect, useState } from "react";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";
import PaymentList from "../components/payment/PaymentList";
import axios from "axios";

const AllPayment = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/allpayment")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  const handleChange = (id) => {
    axios.delete(`http://localhost:9000/allpayment/${id}`).then((res) => {
      if (res.status === 200) {
        setRows(rows.filter((row) => row.id !== id));
      }
    });
  };

  return (
    <LayoutContiner>
      <SubNav project="All Payment" addproject="addpayment" />
      <PaymentList rows={rows} handleChange={handleChange} />
    </LayoutContiner>
  );
};

export default AllPayment;
