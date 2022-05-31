import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar } from "@mui/material";
import { useAuth } from "../../Context/ContextProvieder";

export default function ProfileIcon() {
  const { user, setUser } = useAuth();
  console.log(user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // React.useEffect(() => {
  //   const data = localStorage.user;
  //   if (data) {
  //     setUser(JSON.parse(data));
  //     console.log(data);
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      {!user ? (
        <Avatar
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{ mx: 3 }}
          onClick={handleClick}
        />
      ) : (
        <>
          <div style={{ display: "flex" }}>
            {user && <Button>{user.Email}</Button>}
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => handleLogout() & handleClose()}>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
