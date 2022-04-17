import { Box, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import React from "react";
import { InVoiceContainer } from "../../styles/MetarialStyles";


const PaymentInvoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#262E41",
        borderRadius: 2,
        p: 3,
        color: "#A4A6B3",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Payment Information
        </Typography>
        <PrintIcon
          fontSize="large"
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={handlePrint}
        />
      </Box>

      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Bill No
        </Typography>
        <Typography variant="subtitle">: #345766</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Client Name
        </Typography>
        <Typography variant="subtitle">: James Wallet</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Employee Name
        </Typography>
        <Typography variant="subtitle">: Mortuza Ahmed</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Charges
        </Typography>
        <Typography variant="subtitle">: $120</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Prject Date
        </Typography>
        <Typography variant="subtitle">: 02/03/2022</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Tax
        </Typography>
        <Typography variant="subtitle">: 8%</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Discount
        </Typography>
        <Typography variant="subtitle">: 5%</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Total Amount
        </Typography>
        <Typography variant="subtitle">: $142</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Payment Mathod
        </Typography>
        <Typography variant="subtitle">: Bank</Typography>
      </InVoiceContainer>
      <InVoiceContainer>
        <Typography variant="body1" sx={{ width: "200px" }}>
          Payment Status
        </Typography>
        <Typography variant="subtitle">: Paid</Typography>
      </InVoiceContainer>
    </Box>
  );
};

export default PaymentInvoice;
