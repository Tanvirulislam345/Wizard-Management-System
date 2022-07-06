import React from "react";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeIcon from "@mui/icons-material/Home";
import { BoxContainer, SubNabBar } from "../../styles/MetarialStyles";
import { HeadingFormatTitle } from "../shared/HeadingFormat/HeadingFormatStyle";

const SubNav = ({ project, addproject }) => {
  return (
    <SubNabBar>
      <HeadingFormatTitle>{project}</HeadingFormatTitle>
      <BoxContainer>
        <HeadingFormatTitle>
          <Link to="/dashboard">
            <HomeIcon color="secondary" />
          </Link>
        </HeadingFormatTitle>

        <HeadingFormatTitle>
          <Link to={`/${addproject}`}>
            <AddBoxIcon color="secondary" />
          </Link>
        </HeadingFormatTitle>
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav;
