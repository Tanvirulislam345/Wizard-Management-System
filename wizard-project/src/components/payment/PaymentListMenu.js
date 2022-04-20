import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { MenuItemMake } from "../../styles/MetarialStyles";

export default function PaymentListMenu({ id, handleChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     backgroundColor: "#1A202E",
        //   },
        // }}
      >
        <Link to="#" style={{ textDecoration: "none" }}>
          <MenuItemMake onClick={handleClose}>Edit</MenuItemMake>
        </Link>
        <MenuItemMake onClick={() => handleChange(id)}>Delete</MenuItemMake>
      </Menu>
    </div>
  );
}
