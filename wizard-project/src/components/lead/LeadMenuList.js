import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuItemMake } from "../../styles/MetarialStyles";

const MenuData = [
  { name: "Message/Mail Send" },
  { name: "Conversation Running" },
  { name: "Meeting Done" },
  { name: "Quotation Send" },
  { name: "Re-Quotation Required" },
  { name: "Re-Quotation Send" },
  { name: "Over Budget" },
  { name: "Will get back to us" },
  { name: "Need Time" },
  { name: "Project Approved" },
];
export default function LeadMenuList({ id, handleChange }) {
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
        {MenuData.map((data, index) => (
          <MenuItemMake onClick={() => handleChange(id, data.name)} key={index}>
            {data.name}
          </MenuItemMake>
        ))}
      </Menu>
    </div>
  );
}
