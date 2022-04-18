import { Box } from "@mui/material";
import React from "react";
import {
  HeadingFormatContainer,
  HeadingFormatTitle,
} from "./HeadingFormatStyle";
const HeadingFormat = ({ title, children }) => {
  return (
    <HeadingFormatContainer>
      <HeadingFormatTitle>{title}</HeadingFormatTitle>
      <Box sx={{ textAlign: "justify" }}>{children}</Box>
    </HeadingFormatContainer>
  );
};

export default HeadingFormat;
