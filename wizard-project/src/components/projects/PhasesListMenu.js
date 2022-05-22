import React, { useState } from "react";
import Menu from "@mui/material/Menu";

import { BigButtonMake, MenuItemMake } from "../../styles/MetarialStyles";

export default function PhasesListMenu({ data, handleUpdate }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const projectCategori = [
    { status: "Running" },
    { status: "Done" },
    { status: "Late" },
  ];

  return (
    <div>
      <BigButtonMake onClick={handleClick}>{data.status}</BigButtonMake>
      {/* <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "white" }} />
      </IconButton> */}
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {projectCategori?.map((category, index) => (
          <MenuItemMake
            key={index}
            onClick={() =>
              handleUpdate(data.id, category.status) && handleClose
            }
          >
            {category.status}
          </MenuItemMake>
        ))}
      </Menu>
    </div>
  );
}
