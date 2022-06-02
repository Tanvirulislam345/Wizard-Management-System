import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar, Box, CircularProgress } from "@mui/material";
import { useAuth } from "../../Context/ContextProvieder";
import { useNavigate } from "react-router-dom";

export default function ProfileIcon() {
  const { user, setUser, loading } = useAuth();
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setUser(null);
    navigation("/login");
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  console.log(user);
  return (
    <div>
      {user && (
        <>
          <div style={{ display: "flex" }}>
            <Button>{user?.Email}</Button>
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ mx: 3 }}
              onClick={handleClick}
            />
          </div>

          <Menu
            id="fade-menu"
            sx={{ mt: 2 }}
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={() => handleLogout() & handleClose()}>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
