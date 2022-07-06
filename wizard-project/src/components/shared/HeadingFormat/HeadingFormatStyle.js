import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
export const HeadingFormatContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.background.primary,
  padding: "30px",
  borderRadius: "15px",
  color: theme.palette.secondary.main,
  overflow: "auto",
}));
export const HeadingFormatTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  paddingBottom: "15px",
  marginRight: "10px",
  color: theme.palette.secondary.main,
}));
export const HeadingFormatSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "14.63px",
  letterSpacing: "0.3 px",
}));
export const PlainText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 300,
  lineHeight: "14.63px",
  letterSpacing: "0.3 px",
  marginBottom: "10px",
  width: "200px",
}));

export const PlainTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));
export const PlainTextContainer2 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginBottom: "20px",
}));
