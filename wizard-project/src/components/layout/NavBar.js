import { IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavbarRoot } from '../../styles/MetarialStyles';

export const NavBar = ({ sidebartoggle }) => {

    return (
        <>
            <NavbarRoot>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <IconButton
                        onClick={sidebartoggle}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none',
                                color: 'white'
                            }
                        }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>

                </Toolbar>
            </NavbarRoot>
        </>
    );
};

