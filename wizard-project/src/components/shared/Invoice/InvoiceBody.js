import { Box, Typography } from "@mui/material";
import logo from "../../../assets/logo.png";
import invoice from "../../../assets/Invoice.png";
import footer from "../../../assets/footer.png";
import sidebar from "../../../assets/sidebar.png";
import React, { useEffect, useState } from "react";
import { InvoiceTitle, NoteStyle } from "../../../styles/InvoiceStyle";
import InvoiceDicsription from "./InvoiceDescription";
import AccoutInvoiceDetails from "./AccoutInvoiceDetails";
import axios from "axios";
import ClientDetailsInvoice from "./ClientDetailsInvoice";

const InvoiceBody = ({ invoiceData, clientData }) => {
  const { Discount, Tax, TotalAmount, BillNo, ProjectId } = invoiceData;
  const date = new Date();
  const todaysDate = new Intl.DateTimeFormat(["ban", "id"]).format(date);

  return (
    <Box sx={{ width: "500px", mx: "auto" }}>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          backgroundImage: `url(${sidebar})`,
          width: "100%",
          objectFit: "cover",
          paddingTop: "10px",
          paddingLeft: " 130px",
          paddingRight: " 45px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "start",
        }}
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
            <img src={logo} width="120px" alt="" srcset="" />
            <img src={invoice} width="100px" alt="" srcset="" />
          </Box>
          <Box sx={{ display: "flex", gap: "21px" }}>
            <Box>
              <InvoiceTitle sx={{ fontWeight: "bold" }}>
                invoice no.
              </InvoiceTitle>
              <InvoiceTitle>{BillNo}</InvoiceTitle>
            </Box>
            <Box>
              <InvoiceTitle sx={{ fontWeight: "bold" }}>
                Invoice date{" "}
              </InvoiceTitle>
              <InvoiceTitle>{todaysDate}</InvoiceTitle>
            </Box>
          </Box>
        </Box>

        {clientData !== null && (
          <ClientDetailsInvoice clientData={clientData} />
        )}
        <InvoiceDicsription
          projectId={ProjectId}
          amount={TotalAmount}
          tax={Tax}
          discount={Discount}
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
          <NoteStyle>
            Arya hated them making fun of Needle. "It's castle-forged steel, you
            stupid," she snapped, turning in the saddle to glare at them, "and
            you better shut your mouth."
          </NoteStyle>
          <NoteStyle sx={{ margin: " 7px 0" }}>
            The orphan boys hooted. "Where'd you get a blade like that,
            Lumpyface?" Hot Pie wanted to know.
          </NoteStyle>
          <NoteStyle>Thank you and have a nice day.</NoteStyle>
        </Box>
        <Box sx={{ maxWidth: "500px", width: "100%", mx: "auto", py: 3 }}>
          <img style={{ width: "100%" }} src={footer} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceBody;
