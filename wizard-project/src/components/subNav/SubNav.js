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
        <>
          <Link to="/project">
            <HeadingFormatTitle>
              <HomeIcon color="secondary" />
            </HeadingFormatTitle>
          </Link>
          <Link to={`/${addproject}`}>
            <HeadingFormatTitle>
              <AddBoxIcon color="secondary" sx={{ ml: 2 }} />
            </HeadingFormatTitle>
          </Link>
        </>
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav;
