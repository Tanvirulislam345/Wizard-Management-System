import { Box } from "@mui/material";
import React from "react";
import {
  HeadingFormatContainer,
  HeadingFormatTitle,
} from "./HeadingFormatStyle";
const HeadingFormatPaddingLess = ({ title, children }) => {
  return (
    <HeadingFormatContainer sx={{ p: 0, borderRadius: "0px" }}>
      <HeadingFormatTitle>{title}</HeadingFormatTitle>
      <Box sx={{ textAlign: "justify" }}>{children}</Box>
    </HeadingFormatContainer>
  );
};

export default HeadingFormatPaddingLess;
