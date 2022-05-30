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
    const Due = projectDetails.Due - parseInt(data.NewPayment);
    const TotalPayment =
      projectDetails.TotalPayment + parseInt(data.NewPayment);

    const newData = {
      ...data,
      BillNo: `WizB22${Math.random().toString(36).slice(7)}`,
      ProjectTitle: projectDetails.ProjectTitle,
      Budget: projectDetails.Budget,
      Tax: projectDetails.Tax,
      Discount: projectDetails.Discount,
      TotalPayable: projectDetails.TotalPayable,
      LastPayment: projectDetails.TotalPayment,
      TotalPayment,
      ProjectId: projectDetails.ProjectId,
      ClientId: projectDetails.ClientId,
      Due,
    };

    const updateData = {
      TotalPayment,
      Due,
    };

    if (data !== null) {
      axios.post(`http://localhost:9000/addpayment`, newData).then((res) => {
        if (res.status === 200) {
          axios
            .put(`http://localhost:9000/updateproject/${id}`, updateData)
            .then((res) => {
              if (res.status === 200) {
                navigate("/payment");
              }
            });
        }
      });
    } else {
      alert("please fillup all input");
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9000/project/${id}`)
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
