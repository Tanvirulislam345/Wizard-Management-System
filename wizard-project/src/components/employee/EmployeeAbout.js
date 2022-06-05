import { Box, Grid } from "@mui/material";
import React from "react";
import HeadingFormatPaddingLess from "../shared/HeadingFormat/HeadingFormatPaddingLess";
import ProfileSingleInfo from "../shared/ProfileSingleInfo/ProfileSingleInfo";

const EmployeeAbout = ({ values }) => {
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
        <ProfileSingleInfo title="Full Name" value={values.FullName} />
        <ProfileSingleInfo title="Email" value={values.Email} />
        <ProfileSingleInfo title="Location" value={values.PermanentAddress} />
        <ProfileSingleInfo title="Birth Date" value={values.BirthDate} />
        <ProfileSingleInfo title="Join Date" value={values.JoinDate} />
        <ProfileSingleInfo title="Department" value={values.Department} />
        <ProfileSingleInfo
          title="Basic Salary"
          value={values?.Basicsalary || 0}
          taka="Taka"
        />
        <ProfileSingleInfo
          title="Food Allowance"
          value={values?.FoodAllowance || 0}
          taka="Taka"
        />
        <ProfileSingleInfo
          title="Mobile Allowance"
          value={values?.MobileAllowance || 0}
          taka="Taka"
        />
        <ProfileSingleInfo
          title="Travel Allowance"
          value={values?.TravelAllowance || 0}
          taka="Taka"
        />
        <ProfileSingleInfo
          title="Festival Bonus"
          value={values?.FestivalAllowance || 0}
          taka="Taka"
        />
        <ProfileSingleInfo
          title="Total Salary"
          value={
            values?.Basicsalary +
              values?.FoodAllowance +
              values?.MobileAllowance +
              values?.TravelAllowance +
              values?.FestivalAllowance || 0
          }
          taka="Taka"
        />
      </Grid>
    </Box>
  );
};

export default EmployeeAbout;
