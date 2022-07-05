import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDetailsForm from "./ProjectDetailsForm";
import { useNavigate } from "react-router-dom";
import ProjectIdForm from "./ProjectIdForm";

const AddPaymentForm = ({ ProjectId }) => {
  const [id, setId] = useState(null);

  const [data, setData] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (data !== null) {
      const TotalPayment = projectDetails.TotalPayment + parseInt(data.Payment);
      const TotalPayable = projectDetails.TotalPayable - parseInt(data.Payment);

      const newData = {
        ...data,
        BillNo: `WizB22${Math.random().toString(36).slice(7)}`,
        ProjectTitle: projectDetails.ProjectTitle,
        Budget: projectDetails.Budget,
        TotalBudget: projectDetails.TotalBudget,
        Tax: projectDetails.Tax,
        Discount: projectDetails.Discount,
        TotalPayable: projectDetails.TotalPayable,
        ProjectId: projectDetails.ProjectId,
        ClientId: projectDetails.ClientId,
        TotalPayment,
        TotalPayable,
      };

      axios
        .post(
          `https://wizard-software-technology.rpi.gov.bd/addpayment`,
          newData
        )
        .then((res) => {
          if (res.status === 200) {
            navigate("/payment");
          }
        });
    } else {
      alert("please fillup all input");
    }
  };

  useEffect(() => {
    axios
      .get(`https://wizard-software-technology.rpi.gov.bd/allpayments/${id}`)
      .then((res) => setProjectDetails(res.data));
  }, [id]);

  return (
    <Grid container spacing={3}>
      <ProjectIdForm ProjectId={ProjectId} setId={setId} />
      {projectDetails && (
        <ProjectDetailsForm
          data={data}
          setData={setData}
          projectDetails={projectDetails}
          handleSubmit={handleSubmit}
        />
      )}
    </Grid>
  );
};

export default AddPaymentForm;
