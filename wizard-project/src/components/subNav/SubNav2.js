import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import { BoxContainer, SubNabBar } from "../../styles/MetarialStyles";
import { HeadingFormatTitle } from "../shared/HeadingFormat/HeadingFormatStyle";
import { useAuth } from "../../Context/ContextProvieder";

const SubNav2 = ({ project }) => {
  const { user } = useAuth();
  return (
    <SubNabBar sx={{ pb: 0 }}>
      <HeadingFormatTitle>{project}</HeadingFormatTitle>
      <BoxContainer>
        {user?.Role === "admin" && (
          <Link to="/project">
            <HeadingFormatTitle>
              <HomeIcon color="secondary" />
            </HeadingFormatTitle>
          </Link>
        )}
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav2;
