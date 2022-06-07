import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { MenuItemMake } from "../../styles/MetarialStyles";

export default function LeaveMenuList({ id, handleChange }) {
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
      >
        <Link
          to={`/leave/update/${id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <MenuItemMake>Edit</MenuItemMake>
        </Link>
        <MenuItemMake onClick={() => handleChange(id, "leave", "delete")}>
          Delete
        </MenuItemMake>
        <MenuItemMake
          onClick={() => handleChange(id, "Approved Paid", "Update")}
        >
          Approved Paid
        </MenuItemMake>
        <MenuItemMake
          onClick={() => handleChange(id, "Approved NonPaid", "Update")}
        >
          Approved Non Paid
        </MenuItemMake>
        <MenuItemMake onClick={() => handleChange(id, "Rejected", "Update")}>
          Rejected
        </MenuItemMake>
      </Menu>
    </div>
  );
}
