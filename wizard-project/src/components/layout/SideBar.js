import { Box, Drawer, useMediaQuery } from "@mui/material";
import { NavItem } from "./NavItem";
import { useStyle } from "../../styles/MetarialStyles";
import {
  FaProjectDiagram,
  FaUserSecret,
  FaUsers,
  FaDollyFlatbed,
  FaBuffer,
  FaCaretSquareLeft,
  FaMoneyCheck,
  FaPinterestP,
  FaStripeS,
  FaHome,
  FaPoll,
} from "react-icons/fa";

const items = [
  {
    href: "/dashboard",
    icon: <FaHome fontSize="small" />,
    title: "Dashboard",
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
    href: "/payablesalary",
    icon: <FaPinterestP fontSize="small" />,
    title: "Payable Salary",
  },
  {
    href: "/salary",
    icon: <FaStripeS fontSize="small" />,
    title: "Salary",
  },
  {
    href: "/payment",
    icon: <FaDollyFlatbed fontSize="small" />,
    title: "Payment",
  },
  {
    href: "/expense",
    icon: <FaMoneyCheck fontSize="small" />,
    title: "Expense",
  },
  {
    href: "/leave",
    icon: <FaCaretSquareLeft fontSize="small" />,
    title: "Leave",
  },
  {
    href: "/attendence",
    icon: <FaBuffer fontSize="small" />,
    title: "Attendence",
  },
  {
    href: "/points",
    icon: <FaPoll fontSize="small" />,
    title: "Points",
  },
];

export default function SideBar({ open, onClose, user }) {
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
          {user?.Role === "admin" &&
            items?.map((item) => (
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
                onClose={onClose}
              />
            ))}
        </Box>
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
