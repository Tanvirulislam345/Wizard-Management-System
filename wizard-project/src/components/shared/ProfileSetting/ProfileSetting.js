import { Grid } from "@mui/material";
import React from "react";
import { BigButtonMake, TextFieldMake2 } from "../../../styles/MetarialStyles";
import { HeadingFormatTitle } from "../HeadingFormat/HeadingFormatStyle";

const ProfileSetting = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        my: 3,
        px: 2,
      }}
    >
      <Grid item xs={12}>
        <HeadingFormatTitle sx={{ pb: 0 }}>
          Security settings
        </HeadingFormatTitle>
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
        <BigButtonMake>Save Changes</BigButtonMake>
      </Grid>
    </Grid>
  );
};

export default ProfileSetting;
