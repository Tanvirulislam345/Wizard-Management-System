import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../Context/ContextProvieder";
import { LayoutRoot2 } from "../../styles/MetarialStyles";
import { NavBar } from "./NavBar";

const LayoutChild = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading } = useAuth();
  if (loading && !user) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <>
        <NavBar sidebartoggle={() => setSidebarOpen(!isSidebarOpen)} />
        <LayoutRoot2>{children}</LayoutRoot2>
      </>
    );
  }
};

export default LayoutChild;
