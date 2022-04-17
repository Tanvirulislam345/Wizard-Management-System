import { Box, Drawer, useMediaQuery } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import { NavItem } from './NavItem';
import { useStyle } from '../../styles/MetarialStyles';



const items = [
  {
    href: "/",
    icon: <HouseIcon fontSize="small" />,
    title: "Home",
  },
  {
    href: "/project",
    icon: <HouseIcon fontSize="small" />,
    title: "Project",
  },
  {
    href: "/employee",
    icon: <HouseIcon fontSize="small" />,
    title: "Employee",
  },
  {
    href: "/client",
    icon: <HouseIcon fontSize="small" />,
    title: "Client",
  },
  {
    href: "/payment",
    icon: <HouseIcon fontSize="small" />,
    title: "Payment",
  },
  {
    href: "/expense",
    icon: <HouseIcon fontSize="small" />,
    title: "Expense",
  },
];

export default function SideBar({ open, onClose }) {
    const style = useStyle();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });


    const content = (
        <>
            <Box
                className={style.sidebar}
            >

                <Box sx={{
                    flexGrow: 1
                }}>
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
                        border: 'none',
                    }
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
                    border: 'none',
                }
            }}
        >
            {content}
        </Drawer>

    );
};