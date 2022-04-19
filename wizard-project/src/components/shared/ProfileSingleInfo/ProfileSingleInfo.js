import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  SingleBoldText,
  SingleInWrapper,
  SinglePlainText,
} from "./SingleInfoStyle";

const ProfileSingleInfo = ({ title, value }) => {
  return (
    <Grid xs={12} sm={6} md={6} lg={4} item>
      <SingleInWrapper>
        <SinglePlainText>{title}</SinglePlainText>
        <SingleBoldText>{value}</SingleBoldText>
      </SingleInWrapper>
    </Grid>
  );
};

export default ProfileSingleInfo;
