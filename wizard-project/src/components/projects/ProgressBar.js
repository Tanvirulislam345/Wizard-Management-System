import { Box, Typography } from "@mui/material";
import { Line } from "rc-progress";
import React from "react";

const ProgressBar = ({ updateWork }) => {
  return (
    <Box
      sx={{
        my: 2,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { xs: "80%", md: "70%", lg: "60%" }, mr: 2 }}>
        <Line
          percent={updateWork}
          strokeColor="#3F51B5"
          strokeWidth={3}
          trailWidth={4}
          style={{
            borderRadius: "7px",
          }}
        />
      </Box>
      <Typography variant="h5">{updateWork} %</Typography>
    </Box>
  );
};

export default ProgressBar;
