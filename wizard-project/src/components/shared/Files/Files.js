import { Typography } from "@mui/material";
import React from "react";
import { BoxContainer } from "../../../styles/MetarialStyles";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Files = ({ files }) => {
  return (
    <>
      {files?.map((file, index) => (
        <BoxContainer
          key={index}
          style={{ marginBottom: "5px", justifyContent: "start" }}
        >
          <PictureAsPdfIcon sx={{ mr: 3 }} />
          <Typography>This is pdf</Typography>
        </BoxContainer>
      ))}
    </>
  );
};

export default Files;
