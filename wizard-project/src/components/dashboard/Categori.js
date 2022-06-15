import { Box, Typography } from "@mui/material";
import React from "react";

const Categori = ({ data }) => {
  return (
    <Box
      sx={{
        height: "105px",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#A4A6B3",
        background: "#262E41",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {data.Name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {data.Number}
      </Typography>
    </Box>
  );
};

export default Categori;
