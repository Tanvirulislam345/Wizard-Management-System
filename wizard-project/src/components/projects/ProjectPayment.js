import axios from "axios";
import React, { useEffect, useState } from "react";
import PaymentList from "../payment/PaymentList";
import ProjectPaymentList from "../payment/ProjectPaymentList";

const ProjectPayment = ({ projectDetailsId }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(`https://wiztecbd.online/api/projectpayments/${projectDetailsId}`)
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
      });
  }, [projectDetailsId]);

  const handleChange = (id) => {
    axios.delete(`https://wiztecbd.online/api/allpayment/${id}`).then((res) => {
      if (res.status === 200) {
        setRows(rows.filter((row) => row.id !== id));
      }
    });
  };

  return (
    <>
      {rows?.length > 0 && (
        <PaymentList rows={rows} handleChange={handleChange} />
      )}
    </>
  );
};

export default ProjectPayment;
