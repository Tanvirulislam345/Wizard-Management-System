import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeIcon from "@mui/icons-material/Home";
import { BoxContainer, SubNabBar } from "../../styles/MetarialStyles";

const SubNav = ({ project, addproject }) => {
  return (
    <SubNabBar>
      <Typography variant="h6" color="secondary">
        {project}
      </Typography>
      <BoxContainer>
        <Link to="/">
          <HomeIcon color="secondary" />
        </Link>

        <Link to={`/${addproject}`}>
          <AddBoxIcon color="secondary" sx={{ ml: 2 }} />
        </Link>
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav;
