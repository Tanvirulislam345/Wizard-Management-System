import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import { BoxContainer, SubNabBar } from "../../styles/MetarialStyles";
import { HeadingFormatTitle } from "../shared/HeadingFormat/HeadingFormatStyle";

const SubNav2 = ({ project }) => {
  return (
    <SubNabBar sx={{ pb: 0 }}>
      <HeadingFormatTitle>{project}</HeadingFormatTitle>
      <BoxContainer>
        <Link to="/">
          <HeadingFormatTitle>
            <HomeIcon color="secondary" />
          </HeadingFormatTitle>
        </Link>
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav2;
