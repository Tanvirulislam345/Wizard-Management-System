import { Box, Grid } from "@mui/material";
import React from "react";
import Salary from "../../pages/Salary";
import ProfileSingleInfo from "../shared/ProfileSingleInfo/ProfileSingleInfo";

const EmployeeSlaray = ({ values }) => {
  const {
    Basicsalary,
    FoodAllowance,
    MobileAllowance,
    TravelAllowance,
    FestivalAllowance,
  } = values;

  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            width: {
              md: "95%",
              xs: "100%",
            },
            mx: "auto",
            my: 3,
          }}
        >
          <ProfileSingleInfo
            title="Basic Salary"
            value={Basicsalary || 0}
            taka="Taka"
          />
          <ProfileSingleInfo
            title="Food Allowance"
            value={FoodAllowance || 0}
            taka="Taka"
          />
          <ProfileSingleInfo
            title="Mobile Allowance"
            value={MobileAllowance || 0}
            taka="Taka"
          />
          <ProfileSingleInfo
            title="Travel Allowance"
            value={TravelAllowance || 0}
            taka="Taka"
          />
          <ProfileSingleInfo
            title="Festival Bonus"
            value={FestivalAllowance || 0}
            taka="Taka"
          />
          <ProfileSingleInfo
            title="Total Salary"
            value={
              Basicsalary + FoodAllowance + MobileAllowance + TravelAllowance ||
              0
            }
            taka="Taka"
          />
        </Grid>
      </Box>
      <Salary />
    </>
  );
};

export default EmployeeSlaray;
