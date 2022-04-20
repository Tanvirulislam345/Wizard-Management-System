import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import companyLogo from "../../../assets/comanyName.png";
import sideImg from "../../../assets/Header.png";
import invoice from "../../../assets/Invoice.png";
import invoiceFooter from "../../../assets/invoice-footer.png";
import InvoiceTable from "./InvoiceTable";

const InvoicePaper = () => {
  return (
    <>
      <Grid container sx={{ mx: "auto", maxWidth: "680px" }}>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <img src={sideImg} alt="" />
          <Box sx={{ backgroundColor: "#fff", p: 4 }} className="leftBorder">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img src={companyLogo} width="250px" alt="" />
              <img src={invoice} alt="" width="100px" />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#1F2229", fontSize: "12px" }}
                >
                  invoice no.{" "}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1F2229",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  001/2020{" "}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#1F2229", fontSize: "12px" }}
                >
                  Invoice date{" "}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1F2229",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  January 1, 2020
                </Typography>
              </Box>
            </Box>
            {/* <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ mt: 5 }}>
                    <Typography
                      variant="body1"
                      sx={{ color: "#1F2229", fontSize: "12px" }}
                    >
                      RECIPIENT
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1F2229",
                        fontSize: "12px",
                        fontWeight: "bold",
                        mt: 2,
                      }}
                    >
                      JOHN SNOW <br />
                      2345 Fire Island <br />
                      6789 Winterfell, N <br />
                      VAT no.: 0987654
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1F2229",
                        fontSize: "12px",
                        fontWeight: "bold",
                        mt: 2,
                      }}
                    >
                      @ company.mail@gmail.com
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1F2229",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      m +386 714 505 8385
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ mt: 5, textAlign: "right" }}>
                    <Typography
                      variant="body1"
                      sx={{ color: "#1F2229", fontSize: "12px" }}
                    >
                      MOCKUP{" "}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1F2229",
                        fontSize: "12px",
                        fontWeight: "bold",
                        mt: 2,
                      }}
                    >
                      7896 Clouds Way <br />
                      98237 Braavos, SE <br />
                      VAT no.: 2344234
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1F2229",
                        fontSize: "12px",
                        fontWeight: "bold",
                        mt: 2,
                      }}
                    >
                      @ company.mail@gmail.com
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#1F2229",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      m +386 714 505 8385
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box> */}

            {/* <Box sx={{ my: 5 }}>
              <InvoiceTable></InvoiceTable>
            </Box> */}

            {/* <Box sx={{ mt: 3 }}>
              <Typography
                variant="h5"
                sx={{ color: "#1F2229", fontSize: "12px", fontWeight: "bold" }}
              >
                Notes
              </Typography>
              <Typography
                variant="body"
                sx={{ color: "#545E60", fontSize: "12px", fontWeight: "bold" }}
              >
                Arya hated them making fun of Needle. "It's castle-forged steel,
                you stupid," she snapped, turning in the saddle to glare at
                them, "and you better shut your mouth." The orphan boys hooted.
                "Where'd you get a blade like that, Lumpyface?" Hot Pie wanted
                to know. Thank you and have a nice day.
              </Typography>
            </Box> */}

            {/* <Box sx={{ width: "100%", mt: 3 }}>
              <img src={invoiceFooter} alt="" width={"100%"} />
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default InvoicePaper;
