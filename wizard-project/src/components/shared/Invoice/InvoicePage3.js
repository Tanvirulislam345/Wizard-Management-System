import { Box, Button, Typography } from "@mui/material";
import logo from "../../../assets/logo.png";
import invoice from "../../../assets/Invoice.png";
import footer from "../../../assets/footer.png";
import React, { useRef } from "react";
import {
  InvoiceTitle,
  NoteStyle,
  Recpient,
} from "../../../styles/InvoiceStyle";
import InvoiceDicsription3 from "./InvoiceDescription3";
import AccoutInvoiceDetails from "./AccoutInvoiceDetails";
import ReactToPrint from "react-to-print";

const InvoicePage3 = ({ invoiceData }) => {
  const valuedata = JSON.parse(invoiceData.Value);
  const componentRef = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <Box sx={{ display: "flex", justifyContent: "end", mb: 3 }}>
            <Button variant="outlined">Download</Button>
          </Box>
        )}
        content={() => componentRef.current}
      />
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "50px",
          width: "650px",
          margin: "auto",
        }}
        ref={componentRef}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="" width="120px" />
            <img src={invoice} alt="" width="100px" />
          </Box>
          <Box sx={{ display: "flex", gap: "21px" }}>
            <Box>
              <InvoiceTitle sx={{ fontWeight: "bold" }}>
                invoice no.
              </InvoiceTitle>
              <InvoiceTitle>{invoiceData?.BillNO || "11100pp"}</InvoiceTitle>
            </Box>
            <Box>
              <InvoiceTitle sx={{ fontWeight: "bold" }}>
                Invoice date
              </InvoiceTitle>
              <InvoiceTitle>{invoiceData?.Date}</InvoiceTitle>
            </Box>
          </Box>
        </Box>

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
          <Box></Box>
        </Box>
        <InvoiceDicsription3
          invoice={valuedata}
          Tax={invoiceData?.Tax}
          Discount={invoiceData?.Discount}
          TotalSubTotalPayment={invoiceData.TotalSubTotalPayment}
          TotalPayment={invoiceData.TotalPayment}
        />
        <AccoutInvoiceDetails />

        <Box sx={{ my: 5 }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#1F2229",
              marginTop: "4px",
              marginBottom: "10px",
            }}
          >
            NOTES
          </Typography>
          <NoteStyle>{invoiceData?.InvoiceNote}</NoteStyle>
        </Box>
        <Box sx={{ maxWidth: "500px", width: "100%", mx: "auto", py: 3 }}>
          <img style={{ width: "100%" }} src={footer} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default InvoicePage3;
