import { styled } from "@mui/material/styles";

import { Box, Button, TextField, Typography } from "@mui/material";

export const EmployeesBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#262E41",
  borderRadius: "15px",
  textAlign: "left",
  padding: "30px",
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: "#A4A6B3",
  fontSize: "1.25rem",
}));

export const EmployeeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7480FF",
  height: "32px",
  color: "#FBFBFB",
  alignItems: "center",
  padding: "8px 12px",
  fontSize: "12px",
  borderRadius: "8px",
  marginRight: "11px",
  boxShadow: theme.shadows[1],
}));

export const TextFieldStyle = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#A4A6B3",
  },
  "& label.Mui-focused": {
    color: "#ffffff",
    backgroundColor: "#3F51B5",
    padding: "0px 15px",
    borderRadius: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #D6E4ECB3",
    },

    "&:hover fieldset": {
      border: "1px solid #D6E4ECB3",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #D6E4ECB3",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "#A4A6B3",
  },
  marginTop: "10px",
}));

export const DiscriptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: "400",
  lineHeight: "13px",
  letterSpacing: "0.17px",
  textAlign: "left",
  margin: "30px 0",
  color: "#A4A6B3",
}));

export const CelectButtonStyle = styled(Button)({
  border: "2px solid #3F51B5",
  color: "#FBFBFB",
  backgroundColor: "#3F51B5",
  padding: "0px 10px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "700",
  display: "flex",
  alignContent: "flex-start",
  textTransform: "capitalize",
  hight: "27px",
});
export const InvoiceButtonStyle = styled(Box)({
  color: "black",
  width: "32px",
  hight: "32px",
  borderRadius: "3px",
  backgroundColor: "#3F51B5",
  fontFamily: "Heebo",
  marginLeft: "20px",
});
export const InvoiceTitle = styled(Typography)({
  color: "#1F2229",
  textAlign: "left",
  letterSpacing: "0.0016px",
  textTransform: " uppercase",
  fontFamily: "Josefin Sans",
  fontSize: "14px",
});
export const Recpient = styled(Typography)({
  fontWeight: "500",
  fontSize: "10px",
  fontWeight: "bold",
  textAlign: "left",
  fontFamily: "Josefin Sans",
  color: "#1F2229",
});

export const NoteStyle = styled(Typography)({
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  color: "#545E60",
  fontFamily: "Heebo",
  textAlign: "justify",
});
export const TableTitle = styled(Typography)({
  fontSize: "12px",
  color: "#8BC43F",
  fontWeight: "400",
  textAlign: "left",
});
export const Tablecell = styled(Typography)({
  fontSize: "12px",
  color: "#1F2229",
  fontWeight: "700",

  paddingBottom: "9px",
});
export const AcountInfo = styled(Typography)({
  fontSize: "9px",
  color: "#1F2229",

  textAlign: "left",
  margin: "2px 0",
});

export const NavButton = styled(Button)(({ theme }) => ({
  background: "info",
  borderRadius: "5px",
  color: theme.palette.secondary.main,
  fontWeight: "fontWeightBold",
  justifyContent: "flex-start",
  padding: "5px 20px",
  textAlign: "left",
  textTransform: "none",
  width: "100%",
  "& .MuiButton-startIcon": {
    color: theme.palette.neutral,
  },
  "&:hover": {
    background: "#262E41",
    color: theme.palette.primary.main,
  },
}));
