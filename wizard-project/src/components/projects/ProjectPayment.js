import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectPaymentList from "../payment/ProjectPaymentList";

const ProjectPayment = ({ projectDetailsId }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/allpayment")
      .then((res) => res.json())
      .then((data) => {
        const value = data.filter((da) => da.ProjectId === projectDetailsId);
        setRows(value);
      });
  }, []);

  const handleChange = (id) => {
    axios.delete(`http://localhost:9000/allpayment/${id}`).then((res) => {
      if (res.status === 200) {
        setRows(rows.filter((row) => row.id !== id));
      }
    });
  };

  return (
    <>
      {rows?.length > 0 && (
        <ProjectPaymentList rows={rows} handleChange={handleChange} />
      )}
    </>
  );
};

export default ProjectPayment;
