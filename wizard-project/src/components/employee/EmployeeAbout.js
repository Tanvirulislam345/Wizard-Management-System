import { Box, Grid } from "@mui/material";
import React from "react";
import ProfileSingleInfo from "../shared/ProfileSingleInfo/ProfileSingleInfo";

const EmployeeAbout = ({ values }) => {
  const { FullName, Email, PermanentAddress, BirthDate, JoinDate, Department } =
    values;
  return (
    <Box>
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
        <ProfileSingleInfo title="Full Name" value={FullName} />
        <ProfileSingleInfo title="Email" value={Email} />
        <ProfileSingleInfo title="Location" value={PermanentAddress} />
        <ProfileSingleInfo title="Birth Date" value={BirthDate} />
        <ProfileSingleInfo title="Join Date" value={JoinDate} />
        <ProfileSingleInfo title="Department" value={Department} />
      </Grid>
    </Box>
  );
};

export default EmployeeAbout;
