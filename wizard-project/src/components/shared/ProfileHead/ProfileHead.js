import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import employeeImg from "../../../assets/avater1.png";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import {
  BoxContainer,
  BoxContainerColoum,
} from "../../../styles/MetarialStyles";
import {
  HeadingFormatContainer,
  HeadingFormatSubTitle,
  HeadingFormatTitle,
} from "../HeadingFormat/HeadingFormatStyle";

const ProfileHead = ({
  name,
  designation,
  id,
  description,
  contact,
  points,
}) => {
  const [data, setData] = useState("About");
  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <HeadingFormatContainer>
          <HeadingFormatTitle
            sx={{ textAlign: "right", p: 0, color: "#3851B5" }}
          >
            {points}
          </HeadingFormatTitle>
          <BoxContainerColoum>
            <Avatar
              src={employeeImg}
              alt=""
              sx={{ height: "130px", width: "130px", my: 2 }}
            />

            <HeadingFormatSubTitle>{id}</HeadingFormatSubTitle>
            <BoxContainer>
              <HeadingFormatTitle sx={{ p: 0, mr: 3 }}>
                {name}
              </HeadingFormatTitle>
              <HeadingFormatSubTitle sx={{ p: 0, mt: 1 }}>
                ({designation})
              </HeadingFormatSubTitle>
            </BoxContainer>

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
