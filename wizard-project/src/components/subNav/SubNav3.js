import React from "react";

import { BoxContainer, SubNabBar } from "../../styles/MetarialStyles";
import { HeadingFormatTitle } from "../shared/HeadingFormat/HeadingFormatStyle";
import { useAuth } from "../../Context/ContextProvieder";
import Modals from "../settings/Modals";

const SubNav3 = ({ title, open, setOpen, handleSubmit, children }) => {
  const { user } = useAuth();
  return (
    <SubNabBar sx={{ pt: 2, pl: 1 }}>
      <HeadingFormatTitle>{title} List</HeadingFormatTitle>
      <BoxContainer>
        {user?.Role === "admin" && (
          <HeadingFormatTitle>
            <Modals
              title={title}
              open={open}
              setOpen={setOpen}
              handleSubmit={handleSubmit}
              children={children}
            />
          </HeadingFormatTitle>
        )}
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav3;
