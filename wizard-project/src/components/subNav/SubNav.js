import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeIcon from "@mui/icons-material/Home";
import { BoxContainer, SubNabBar } from "../../styles/MetarialStyles";
import { HeadingFormatTitle } from "../shared/HeadingFormat/HeadingFormatStyle";
import { useAuth } from "../../Context/ContextProvieder";

const SubNav = ({ project, addproject }) => {
  const { user } = useAuth();
  return (
    <SubNabBar sx={{ pb: 0 }}>
      <HeadingFormatTitle>{project}</HeadingFormatTitle>
      <BoxContainer>
        <Link to="/">
          <HeadingFormatTitle>
            <HomeIcon color="secondary" />
          </HeadingFormatTitle>
        </Link>

        {user?.Role === "admin" && (
          <Link to={`/${addproject}`}>
            <HeadingFormatTitle>
              <AddBoxIcon color="secondary" sx={{ ml: 2 }} />
            </HeadingFormatTitle>
          </Link>
        )}
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav;
