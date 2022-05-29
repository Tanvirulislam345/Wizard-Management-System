import { Box } from "@mui/material";
import React from "react";
import { Recpient } from "../../../styles/InvoiceStyle";

const ClientDetailsInvoice = ({ clientData }) => {
  const { Address, CompanyName, Email, Contact } = clientData;
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "43px",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Recpient>Wizard Software & Technology Bangladesh Ltd.</Recpient>
        <Recpient>52/A Lake Circus, Kalabagan,</Recpient>
        <Recpient> Dhaka - 1205 4</Recpient>
        <Recpient> VAT no.: 0987654</Recpient>
        <Recpient sx={{ marginTop: "10px" }}>
          Email: wiztecbd@gmail.com
        </Recpient>
        <Recpient>Contact No: +880 1600 - 299169</Recpient>
      </Box>
      <Box>
        <Recpient sx={{ marginBottom: "5px" }}> RECIPIENT</Recpient>
        <Recpient>Company Name : {CompanyName} </Recpient>
        <Recpient>Address : {Address}</Recpient>
        <Recpient sx={{ marginTop: "10px" }}>Email: {Email}</Recpient>
        <Recpient>Contact No: {Contact}</Recpient>
      </Box>
    </Box>
  );
};

export default ClientDetailsInvoice;
