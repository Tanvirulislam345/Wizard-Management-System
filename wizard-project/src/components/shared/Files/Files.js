import React from "react";
import { BigButtonMake, BoxContainer } from "../../../styles/MetarialStyles";
import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfTwoTone";

const Files = ({ files }) => {
  return (
    <>
      {files?.map((file, index) => (
        <BoxContainer
          key={index}
          style={{ marginBottom: "5px", justifyContent: "start" }}
        >
          <BigButtonMake startIcon={<PictureAsPdfTwoToneIcon sx={{ mr: 1 }} />}>
            This is pdf
          </BigButtonMake>
        </BoxContainer>
      ))}
    </>
  );
};

export default Files;
