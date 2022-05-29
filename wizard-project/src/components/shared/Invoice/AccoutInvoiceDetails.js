import { Box, Typography } from "@mui/material";
import React from "react";
import { AcountInfo } from "../../../styles/InvoiceStyle";

const AccoutInvoiceDetails = () => {
  return (
    <Box
      sx={{
        width: "280px",
        ml: "auto",
        mt: 5,
      }}
    >
      <Typography
        sx={{
          fontSize: "11px",
          textAlign: "left",
          color: "#FFFFFF",
          backgroundColor: "#8BC43F",
          px: 1,
        }}
      >
        ACCOUNT DATA
      </Typography>

      <AcountInfo sx={{ fontWeight: "700" }}>
        Transfer the amount to the business account below.
      </AcountInfo>
      <AcountInfo sx={{ fontWeight: "700" }}>
        {" "}
        include invoice number on your check.
      </AcountInfo>
      <AcountInfo>BANK: PENTOS</AcountInfo>
      <AcountInfo>IBAN: ADSA-2343-2332-23234</AcountInfo>
    </Box>
  );
};

export default AccoutInvoiceDetails;
