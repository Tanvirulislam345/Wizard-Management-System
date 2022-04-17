import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { BigButtonMake, TextFieldMake2 } from "../../styles/MetarialStyles";

const EmployeeSetting = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          my: 3,
          color: "#A4A6B3",
          px: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography>Security settings</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextFieldMake2 fullWidth label="User Name" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <TextFieldMake2 fullWidth label="Password" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <TextFieldMake2 fullWidth label="New Password" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <BigButtonMake>Save</BigButtonMake>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ mt: 4 }}>Account Settings</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake2 fullWidth label="First Name" variant="filled" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake2 fullWidth label="Last Name" variant="filled" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFieldMake2 fullWidth label="City" variant="filled" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFieldMake2 fullWidth label="Email" variant="filled" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextFieldMake2 fullWidth label="Country" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <TextFieldMake2 fullWidth label="Address" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <BigButtonMake>Save Changes</BigButtonMake>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeSetting;
