import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { NavBar } from "./NavBar";
import SideBar from "./SideBar";
import { LayoutRoot } from "../../styles/MetarialStyles";
import { useAuth } from "../../Context/ContextProvieder";

export const Layout = ({ children }) => {
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
        <SideBar
          onClose={() => setSidebarOpen(!isSidebarOpen)}
          open={isSidebarOpen}
          user={user}
        />
        <LayoutRoot>{children}</LayoutRoot>
      </>
    );
  }
};
