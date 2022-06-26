import { Grid } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProjectDetailsForm2 from "./ProjectDetailsForm2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddMenualPayment = ({ ProjectId }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (data !== null) {
      const newData = {
        ...data,
        ClientId: `Wiz22${Math.random().toString(36).slice(7)}`,
        BillNo: `WizB22${Math.random().toString(36).slice(7)}`,
      };
      console.log(newData);

      axios.post(`http://localhost:9000/addpayment`, newData).then((res) => {
        if (res.status === 200) {
          navigate("/payment");
        }
      });
    } else {
      alert("please fillup all input");
    }
  };

  return (
    <LayoutContiner>
      <Grid container spacing={3}>
        <ProjectDetailsForm2
          data={data}
          setData={setData}
          handleSubmit={handleSubmit}
        />
      </Grid>
    </LayoutContiner>
  );
};

export default AddMenualPayment;
