import { Box } from "@mui/material";
import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { TextFieldMake } from "../../styles/MetarialStyles";

const Home = () => {
  return (
    <Box>
      <TextFieldMake variant="outlined" label="Hello" />
    </Box>
  );
};

export default Home;
