import React from "react";
import { BigButtonMake, BoxContainer } from "../../../styles/MetarialStyles";
import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfTwoTone";

const Files = ({ files }) => {
  const data = [files];
  return (
    <>
      {data?.map((file, index) => (
        <BoxContainer
          key={index}
          style={{ marginBottom: "5px", justifyContent: "start" }}
        >
          <BigButtonMake startIcon={<PictureAsPdfTwoToneIcon sx={{ mr: 1 }} />}>
            <a href={file} style={{ textDecoration: "none", color: "white" }}>
              Document files {index + 1}
            </a>
          </BigButtonMake>
        </BoxContainer>
      ))}
    </>
  );
};

export default Files;
