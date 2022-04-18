import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
export const HeadingFormatContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.background.primary,
  padding: "30px",
  borderRadius: "15px",
  color: theme.palette.secondary.main,
}));
export const HeadingFormatTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 700,
  paddingBottom: "15px",
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
  marginTop: "10px",
}));
