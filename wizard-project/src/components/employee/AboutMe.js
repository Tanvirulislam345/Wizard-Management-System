import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          width: {
            md: "90%",
          },
          mx: "auto",
          my: 3,
          color: "#A4A6B3",
        }}
      >
        <Grid xs={12} sm={6} md={6} lg={4} item>
          <Stack
            spacing={2}
            item
            sx={{ border: "1px dashed #A4A6B3", p: 3, borderRadius: 3 }}
          >
            <Typography variant="body1">Full Name</Typography>
            <Typography variant="body1">Tanvirul islam</Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={4} item>
          <Stack
            spacing={2}
            sx={{ border: "1px dashed #A4A6B3", p: 3, borderRadius: 3 }}
          >
            <Typography variant="body1">Location</Typography>
            <Typography variant="body1">Dhanmondhi, Dhaka</Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={4} item>
          <Stack
            spacing={2}
            sx={{ border: "1px dashed #A4A6B3", p: 3, borderRadius: 3 }}
          >
            <Typography variant="body1">Location</Typography>
            <Typography variant="body1">Dhanmondhi, Dhaka</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ color: "#A4A6B3", my: 3 }}>
        <Grid xs={12} item>
          <Stack spacing={1}>
            <Typography variant="h5">Career Summary</Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                overflow: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
              netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} item>
          <Stack spacing={1}>
            <Typography variant="h5">Description:</Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                overflow: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
              netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} item>
          <Stack spacing={1}>
            <Typography variant="h5">Achivement</Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                overflow: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
              netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
