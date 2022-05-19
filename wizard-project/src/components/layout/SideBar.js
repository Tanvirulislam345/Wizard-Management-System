import { Box, Drawer, useMediaQuery } from "@mui/material";
import { NavItem } from "./NavItem";
import { useStyle } from "../../styles/MetarialStyles";
import {
  FaHome,
  FaProjectDiagram,
  FaDonate,
  FaUserSecret,
  FaUsers,
  FaDollyFlatbed,
} from "react-icons/fa";

const items = [
  {
    href: "/",
    icon: <FaHome fontSize="small" />,
    title: "Home",
  },
  {
    href: "/project",
    icon: <FaProjectDiagram fontSize="small" />,
    title: "Project",
  },
  {
    href: "/employee",
    icon: <FaUsers fontSize="small" />,
    title: "Employee",
  },
  {
    href: "/client",
    icon: <FaUserSecret fontSize="small" />,
    title: "Client",
  },
  {
    href: "/payment",
    icon: <FaDollyFlatbed fontSize="small" />,
    title: "Payment",
  },
  {
    href: "/expense",
    icon: <FaDonate fontSize="small" />,
    title: "Expense",
  },
  {
    href: "/leave",
    icon: <FaDonate fontSize="small" />,
    title: "Leave",
  },
];

export default function SideBar({ open, onClose }) {
  const style = useStyle();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box className={style.sidebar}>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              onClose={onClose}
            />
          ))}
        </Box>
        {/* <Divider sx={{ borderColor: '#2D3748' }} /> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        variant="permanent"
        anchor="left"
        open
        PaperProps={{
          sx: {
            width: 280,
            border: "none",
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: 280,
          border: "none",
        },
      }}
    >
      {content}
    </Drawer>
  );
}
