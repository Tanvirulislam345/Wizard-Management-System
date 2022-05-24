import { Box } from "@mui/material";
import React from "react";

const Skill = ({ skills }) => {
  const data = JSON.parse(skills);
  return (
    <Box sx={{ px: 3 }}>
      {data.map((value, index) => (
        <h5 key={index}>{value.name}</h5>
      ))}
    </Box>
  );
};

export default Skill;
