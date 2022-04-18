import { Box, Typography } from "@mui/material";
import React from "react";
import { BoxContainer } from "../../styles/MetarialStyles";

const ClientDetails = ({ clientDetails }) => {
  let keys = Object.keys(clientDetails);
  keys.shift(); //shift used for remove 1st element
  const value = keys.splice(11, 1); //splice used for which index number and how many index
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
