import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeProfileBody from "../components/employee/EmployeeProfileBody";
import ProfileHead from "../components/shared/ProfileHead/ProfileHead";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const ClientProfile = () => {
  const { clientId } = useParams();
  const [values, setValues] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/client/${clientId}`)
      .then((res) => setValues(res.data[0]));
  }, [clientId]);

  return (
    <LayoutContiner>
      <SubNav2 project="Client Profile" />
      {values !== null && (
        <Grid container spacing={2}>
          <Grid xs={12} md={5} lg={4} item>
            <ProfileHead
              name={values.FullName}
              designation={values.CompanyName}
              id={values.ClientId}
              description={values.Description}
              contact={values.Contract}
            />
          </Grid>
          <Grid xs={12} md={7} lg={8} item>
            <EmployeeProfileBody />
          </Grid>
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default ClientProfile;
