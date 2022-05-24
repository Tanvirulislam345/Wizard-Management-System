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
  color: "#A4A6B3",
});
export const SinglePlainText2 = styled(Typography)(({ theme }) => ({
  font: "Metropolis",
  fontSize: "14px",
  padding: "5px",
  border: "1px solid white",
  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
  },
}));
export const SingleBoldText = styled(Typography)({
  font: "Metropolis",
  fontWeight: "bold",
  fontSize: "14px",
  marginTop: "10px",
});
