import { Box, Grid, Typography } from "@mui/material";
import logo from "../../../assets/logo.png";
import invoice from "../../../assets/Invoice.png";
import footer from "../../../assets/footer.png";
import sidebar from "../../../assets/sidebar.png";
import React from "react";
import {
  InvoiceButtonStyle,
  InvoiceTitle,
  Mockup,
  NoteStyle,
  Recpient,
} from "../../../styles/InvoiceStyle";
import { FaPrint } from "react-icons/fa";
import InvoiceDicsription from "./InvoiceDescription";

const InvoiceBody = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
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
              <img src={logo} width="150px" alt="" srcset="" />
              <img src={invoice} width="130px" alt="" srcset="" />
            </Box>
            <Box sx={{ display: "flex", gap: "21px" }}>
              <Box>
                <InvoiceTitle>invoice no.</InvoiceTitle>
                <InvoiceTitle sx={{ fontWeight: "bold" }}>
                  001/2020
                </InvoiceTitle>
              </Box>
              <Box>
                <InvoiceTitle>Invoice date </InvoiceTitle>
                <InvoiceTitle sx={{ fontWeight: "bold" }}>
                  January 1, 2020
                </InvoiceTitle>
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
              <Recpient sx={{ marginBottom: "2px" }}>RECIPIENT</Recpient>
              <Recpient> JOHN SNOW</Recpient>
              <Recpient>2345 Fire Island</Recpient>
              <Recpient>6789 Winterfell, N</Recpient>
              <Recpient> VAT no.: 0987654</Recpient>
              <Recpient sx={{ marginTop: "10px" }}>
                @ company.mail@gmail.com{" "}
              </Recpient>
              <Recpient>m +386 714 505 8385</Recpient>
            </Box>
            <Box>
              <Mockup sx={{ marginBottom: "2px" }}> MOCKUP</Mockup>
              <Mockup>7896 Clouds Way </Mockup>
              <Mockup> 98237 Braavos, SE</Mockup>
              <Mockup>VAT no.: 2344234</Mockup>
              <Mockup sx={{ marginTop: "10px" }}>your.mail@gmail.com</Mockup>
              <Mockup>m +00 000 000 000</Mockup>
            </Box>
          </Box>

          <InvoiceDicsription />

          <Box sx={{ textAlign: "left" }}>
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
              Arya hated them making fun of Needle. "It's castle-forged steel,
              you stupid," she snapped, turning in the saddle to glare at them,
              "and you better shut your mouth."
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
      </Grid>
    </Grid>
  );
};

export default InvoiceBody;
