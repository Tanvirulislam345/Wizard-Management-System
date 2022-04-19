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
        <ProfileSingleInfo title="Location" value={values.Address} />
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} item>
          <HeadingFormatPaddingLess title="Career Summary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
            netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
          </HeadingFormatPaddingLess>
        </Grid>
        <Grid xs={12} item>
          <HeadingFormatPaddingLess title="Education" sx={{ p: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
            netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
          </HeadingFormatPaddingLess>
        </Grid>
        <Grid xs={12} item>
          <HeadingFormatPaddingLess title="Achivement" sx={{ p: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
            netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
          </HeadingFormatPaddingLess>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeAbout;
