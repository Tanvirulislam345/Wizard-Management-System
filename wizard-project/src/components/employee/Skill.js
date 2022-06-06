import { Box } from "@mui/material";
import React from "react";

const Skill = ({ skills }) => {
  const data = JSON.parse(skills);
  const value = data.map((value) => {
    return value.name;
  });

  return <Box sx={{ px: 3 }}>{value.join(", ")}</Box>;
};

export default Skill;
