import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import EmployeeProfileBody from "../components/employee/EmployeeProfileBody";
import EmployeeProfileHead from "../components/employee/EmployeeProfileHead";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const ClientProfile = () => {
  const { clientId } = useParams();
  console.log(clientId);
  return (
    <LayoutContiner>
      <SubNav2 project="Employee Profile" />
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4} item>
          <EmployeeProfileHead />
        </Grid>
        <Grid xs={12} md={7} lg={8} item>
          <EmployeeProfileBody />
        </Grid>
      </Grid>
    </LayoutContiner>
  );
};

export default ClientProfile;
