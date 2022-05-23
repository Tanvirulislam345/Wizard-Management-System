import { Box, Typography } from "@mui/material";
import React from "react";
import {
  PlainText,
  PlainTextContainer,
} from "../shared/HeadingFormat/HeadingFormatStyle";

const ClientDetails = ({ clientDetails }) => {
  return (
    <Box>
      <PlainTextContainer>
        <PlainText>Client Id</PlainText>
        <PlainText>{clientDetails.ClientId}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Full Name</PlainText>
        <PlainText>{clientDetails.FullName}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Company Name</PlainText>
        <PlainText>{clientDetails.CompanyName}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Date</PlainText>
        <PlainText>{clientDetails.Date}</PlainText>
      </PlainTextContainer>
    </Box>
  );
};

export default ClientDetails;
