import React, { useState } from "react";
import Menu from "@mui/material/Menu";

import { BigButtonMake, MenuItemMake } from "../../styles/MetarialStyles";

export default function PhasesListMenu({ data, value, handleUpdate }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const projectCategori = [
    { status: "Stop" },
    { status: "Done" },
    { status: "Late" },
  ];

  return (
    <div>
      <BigButtonMake onClick={handleClick} style={{ width: "100px" }}>
        {data.status}
      </BigButtonMake>
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
            onClick={() => handleUpdate(value, category?.status)}
          >
            {category.status}
          </MenuItemMake>
        ))}
      </Menu>
    </div>
  );
}
