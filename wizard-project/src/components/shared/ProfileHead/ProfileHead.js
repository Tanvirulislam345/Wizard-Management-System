import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import employeeImg from "../../../assets/avater1.png";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { BoxContainerColoum } from "../../../styles/MetarialStyles";
import {
  HeadingFormatContainer,
  HeadingFormatSubTitle,
  HeadingFormatTitle,
} from "../HeadingFormat/HeadingFormatStyle";

const ProfileHead = ({ name, designation, id, description, contact }) => {
  const [data, setData] = useState("About");
  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <HeadingFormatContainer>
          <BoxContainerColoum>
            <HeadingFormatTitle sx={{ p: 0 }}>{name}</HeadingFormatTitle>
            <HeadingFormatSubTitle>{designation}</HeadingFormatSubTitle>
            <Avatar
              src={employeeImg}
              alt=""
              sx={{ height: "130px", width: "130px", my: 2 }}
            />

            <HeadingFormatSubTitle>{id}</HeadingFormatSubTitle>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                my: 2,
                textAlign: "justify",
                overflow: "auto",
              }}
            >
              {description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
              netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
            </Typography>
            <HeadingFormatTitle>{contact}</HeadingFormatTitle>
          </BoxContainerColoum>
        </HeadingFormatContainer>
      </Grid>
    </Grid>
  );
};

export default ProfileHead;
