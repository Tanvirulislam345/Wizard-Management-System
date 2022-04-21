import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import {
  AcountInfo,
  Tablecell,
  TableTitle,
} from "../../../styles/InvoiceStyle";

const InvoiceDescription = () => {
  return (
    <Box sx={{ marginTop: "64px" }}>
      <Grid container>
        <Grid item md={6}>
          <TableTitle sx={{ textAlign: "left" }}>DESCRIPTION</TableTitle>
        </Grid>
        <Grid item md={2}>
          <TableTitle>HOURS</TableTitle>
        </Grid>
        <Grid item md={2}>
          <TableTitle sx={{ marginLeft: "20px" }}>UNITS</TableTitle>
        </Grid>
        <Grid item md={2}>
          <TableTitle sx={{ marginLeft: "20px" }}>AMOUNT</TableTitle>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "28px" }}
      >
        <Grid item md={6}>
          <Tablecell sx={{ textAlign: "left" }}>Castle Black attack</Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell sx={{ textAlign: "left" }}>60</Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell>15 u.</Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell>900,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "8px" }}
      >
        <Grid item md={6}>
          <Tablecell sx={{ textAlign: "left" }}>Dragon defence</Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell sx={{ textAlign: "left" }}>20</Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell>15 u.</Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell>240,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "9px" }}
      >
        <Grid item md={6}></Grid>
        <Grid item md={2}>
          <TableTitle>SUBTOTAL</TableTitle>
        </Grid>
        <Grid item md={2}>
          <Tablecell></Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell>1140,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "8px" }}
      >
        <Grid item md={6}></Grid>
        <Grid item md={2}>
          <TableTitle>DISCOUNT 5%</TableTitle>
        </Grid>
        <Grid item md={2}>
          <Tablecell></Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell>57,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "8px" }}>
        <Grid item md={6}></Grid>
        <Grid item md={2}>
          <Tablecell sx={{ textAlign: "left" }}>TOTAL</Tablecell>
        </Grid>
        <Grid item md={2}>
          <Tablecell></Tablecell>
        </Grid>
        <Grid item md={2}>
          <TableTitle>1083,00 USD</TableTitle>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "30px" }}>
        <Grid md={6}></Grid>
        <Grid md={6}>
          <Box
            sx={{
              backgroundColor: "#8BC43F",
              paddingLeft: "7px",
              paddingTop: "2px",
              paddingBottom: "1px",
            }}
          >
            <Typography
              sx={{ fontSize: "11px", textAlign: "left", color: "#FFFFFF" }}
            >
              ACCOUNT DATA
            </Typography>
          </Box>

          <AcountInfo sx={{ fontWeight: "700" }}>
            Transfer the amount to the business account below.
          </AcountInfo>
          <AcountInfo sx={{ fontWeight: "700" }}>
            {" "}
            include invoice number on your check.
          </AcountInfo>
          <AcountInfo>BANK: PENTOS</AcountInfo>
          <AcountInfo>IBAN: ADSA-2343-2332-23234</AcountInfo>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvoiceDescription;
