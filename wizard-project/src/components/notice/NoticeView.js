import axios from "axios";
import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { LayoutContiner } from "../../styles/MetarialStyles";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import invoice from "../../assets/Invoice.png";
import footer from "../../assets/footer.png";
import ReactToPrint from "react-to-print";
import { InvoiceTitle, NoteStyle } from "../../styles/InvoiceStyle";

const NoticeView = () => {
  const componentRef = useRef();
  const { noticeId } = useParams();
  const [data, setData] = useState(null);
  useState(() => {
    axios
      .get(`http://localhost:9000/notice/view/${noticeId}`)
      .then((res) => setData(res.data));
  }, [noticeId]);
  return (
    <LayoutContiner>
      <ReactToPrint
        trigger={() => (
          <Box sx={{ display: "flex", justifyContent: "end", mb: 3 }}>
            <Button variant="outlined">Download</Button>
          </Box>
        )}
        content={() => componentRef.current}
      />
      {data !== null && (
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
              <Typography variant="h5">Notice</Typography>
            </Box>
          </Box>

          <Box sx={{ my: 5, minHeight: "600px", height: "100%" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#1F2229",
                marginTop: "4px",
                marginBottom: "10px",
              }}
            >
              Subject : {data.Subject}
            </Typography>
            <NoteStyle>{data.Notice}</NoteStyle>
          </Box>
          <Box sx={{ maxWidth: "500px", width: "100%", mx: "auto", py: 3 }}>
            <img style={{ width: "100%" }} src={footer} alt="" />
          </Box>
        </Box>
      )}
    </LayoutContiner>
  );
};

export default NoticeView;
