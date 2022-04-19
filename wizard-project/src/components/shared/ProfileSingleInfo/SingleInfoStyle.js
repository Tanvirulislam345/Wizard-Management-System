import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SingleInWrapper = styled(Stack)({
  border: "1px dashed #A4A6B3",
  padding: "15px",
  borderRadius: "5px",
  overflowWrap: "break-word",
});
export const SinglePlainText = styled(Typography)({
  font: "Metropolis",
  fontSize: "14px",
});
export const SingleBoldText = styled(Typography)({
  font: "Metropolis",
  fontWeight: "bold",
  fontSize: "14px",
  marginTop: "10px",
});
