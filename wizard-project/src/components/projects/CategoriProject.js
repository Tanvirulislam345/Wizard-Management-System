import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ProjectCategori = ({ categori, isCategori, setCategori }) => {
  return (
    <Grid xs={12} sm={6} item md={3}>
      <Box
        sx={{
          height: "105px",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isCategori === categori.name ? "white" : "#A4A6B3",
          background: isCategori === categori.name ? "#3F51B5" : "#262E41",
        }}
        onClick={() => setCategori(categori.name)}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {categori.name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ProjectCategori;
