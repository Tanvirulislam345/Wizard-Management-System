import { Grid } from "@mui/material";
import React from "react";
import ProfileSingleInfo from "../shared/ProfileSingleInfo/ProfileSingleInfo";

const ClientAbout = ({ values }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: {
            md: "90%",
            xs: "100%",
          },
          mx: "auto",
          my: 3,
        }}
      >
        <ProfileSingleInfo title="Full Name" value={values.FullName} />
        <ProfileSingleInfo title="Email" value={values.Email} />
        <ProfileSingleInfo title="Location" value={values.Address} />
        <ProfileSingleInfo title="Company Name" value={values.CompanyName} />
        <ProfileSingleInfo title="Currency" value={values.Address} />
        <ProfileSingleInfo
          title="Billing Method"
          value={values.BillingMethod}
        />
      </Grid>
    </>
  );
};

export default ClientAbout;
