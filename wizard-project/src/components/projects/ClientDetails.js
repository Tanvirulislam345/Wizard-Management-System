import { Box, Typography } from "@mui/material";
import React from "react";
import { BoxContainer } from "../../styles/MetarialStyles";

const ClientDetails = ({ keys, clientDetails }) => {
  return (
    <Box>
      {keys?.map((key, index) => (
        <BoxContainer key={index} style={{ marginBottom: "5px" }}>
          <Typography style={{ width: "150px" }}>{key}</Typography>
          <Typography>{clientDetails[key]}</Typography>
        </BoxContainer>
      ))}
    </Box>
  );
};

export default ClientDetails;
