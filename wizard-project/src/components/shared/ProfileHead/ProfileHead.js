import { Avatar, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

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
  file,
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
              src={file}
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
            </Typography>
            <HeadingFormatTitle>{contact}</HeadingFormatTitle>
          </BoxContainerColoum>
        </HeadingFormatContainer>
      </Grid>
    </Grid>
  );
};

export default ProfileHead;
