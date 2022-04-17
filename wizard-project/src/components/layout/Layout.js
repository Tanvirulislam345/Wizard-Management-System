import { useState } from 'react';
import { Box } from '@mui/material';
import { NavBar } from './NavBar';
import SideBar from './SideBar';
import { LayoutRoot } from '../../styles/MetarialStyles';

export const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <NavBar sidebartoggle={() => setSidebarOpen(!isSidebarOpen)} />
      <SideBar
        onClose={() => setSidebarOpen(!isSidebarOpen)}
        open={isSidebarOpen}
      />
      <LayoutRoot>{children}</LayoutRoot>
    </>
  );
};