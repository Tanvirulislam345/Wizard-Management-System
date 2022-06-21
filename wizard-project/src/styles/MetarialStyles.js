import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { AppBar, Box, Button, Grid, MenuItem, TextField } from "@mui/material";

export const LayoutRoot = styled(Box)(({ theme }) => ({
  width: {
    lg: "calc(100% - 280px)",
  },
  minHeight: "calc(100vh - 64px)",
  height: "100%",
  paddingTop: "64px",
  paddingBottom: "30px",
  background: theme.background.primary,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));
export const LayoutRoot2 = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 64px)",
  height: "100%",
  paddingTop: "64px",
  background: theme.background.primary,
}));

export const LayoutContiner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.background.secondary,
  maxHeight: "83vh",
  height: "100%",
  overflow: "auto",
  margin: "30px",
  padding: "30px",
  borderRadius: "15px",
}));

export const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.background.primary,
  boxShadow: theme.shadows[3],
  left: {
    lg: 280,
  },
  width: {
    lg: "calc(100% - 280px)",
  },
}));

export const SubNabBar = styled(Box)(({ theme }) => ({
  color: "#A4A6B3",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // padding: "30px 0px",
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const BoxContainerColoum = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const InVoiceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "18px",
}));

export const BigButtonMake = styled(Button)(({ theme }) => ({
  padding: "8px 12px",
  marginTop: "10px",
  color: "white",
  background: "#7480FF",
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "14.63px",
  letterSpacing: "0.3 px",
  textTransform: "none",
  ":hover": {
    color: "black",
    background: "#7480FF",
  },
}));

export const ButtonMake = styled(Button)(({ theme }) => ({
  padding: "0px 12px",
  background: theme.background.primary,
  ":hover": { background: theme.background.primary },
}));

export const MenuItemMake = styled(MenuItem)(({ theme }) => ({
  color: "#A4A6B3",
}));

export const TextFieldMake = styled(TextField)(({ theme }) => ({
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
      border: "1px solid #A4A6B3",
    },

    "&:hover fieldset": {
      border: "2px solid gray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#A4A6B3",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "#A4A6B3",
  },
  "& .MuiSvgIcon-root": {
    color: "#A4A6B3",
  },
  marginTop: "10px",
}));
export const FileContainerField = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  padding: "16.5px 14px",
  border: "2px solid #A4A6B3",
  color: "#A4A6B3",
  borderRadius: "4px",
}));
export const TextFieldMake2 = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#A4A6B3",
  },
  "& label.Mui-focused": {
    display: "none",
  },
  "& .MuiFilledInput-input": {
    color: "#A4A6B3",
  },
  "& .MuiSvgIcon-root": {
    color: "#A4A6B3",
  },

  marginTop: "10px",
  borderRadius: "5px",
  borderBottom: "2px solid #A4A6B3",
}));

export const useStyle = makeStyles((theme) => {
  return {
    sidebar: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingTop: "64px",
      backgroundColor: theme.background.secondary,
    },
  };
});

export const StyleMultiSelector = {
  searchBox: {
    marginTop: "10px",
    padding: "10.5px 14px",
    fonstSize: "1rem",
    border: "2px solid #A4A6B3",
    color: "#A4A6B3",
    borderRadius: "4px",
  },
};
