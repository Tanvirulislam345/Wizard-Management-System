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
      {/* <Grid xs={12} item>
        <Box sx={{ backgroundColor: "#262E41", borderRadius: 2, p: 3 }}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body1"
                onClick={() => setData("About")}
                sx={{
                  color: data === "About" ? "#3F51B5" : "secondary.main",
                  borderBottom: data === "About" && "1px solid #3F51B5",
                  fontWeight: "bold",
                  px: 2,
                }}
              >
                About
              </Typography>
              <Typography
                variant="body1"
                onClick={() => setData("Skill")}
                sx={{
                  color: data === "Skill" ? "#3F51B5" : "secondary.main",
                  borderBottom: data === "Skill" && "1px solid #3F51B5",
                  fontWeight: "bold",
                  px: 2,
                  mx: 3,
                }}
              >
                Skill
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                my: 2,
                textAlign: "justify",
                overflow: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
              netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Box sx={{ backgroundColor: "#262E41", borderRadius: 2, p: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "secondary.main", fontWeight: "bold", mb: 2 }}
          >
            Project Files
          </Typography>
          <Stack spacing={2} direction="row" sx={{ color: "#fff" }}>
            <FileCopyIcon />
            <Typography sx={{ ml: 1 }} variant="body1">
              Project Documents.pdf
            </Typography>
          </Stack>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default ProfileHead;