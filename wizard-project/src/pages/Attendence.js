import React, { useState } from "react";
import Attendences from "../components/attendence/Attendences";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Attendence = () => {
  const [data, setData] = useState("File Attendence");
  const navValue = ["File Attendence", "Menual Attendence"];
  return (
    <LayoutContiner>
      <HeadingFormatContainer sx={{ mb: 2 }}>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>
      {data === "File Attendence" && (
        <SubNav project="Attendence" addproject="addattendence"></SubNav>
      )}
      {data === "Menual Attendence" && (
        <SubNav project="Attendence" addproject="addmenualattendence"></SubNav>
      )}
      <Attendences />
    </LayoutContiner>
  );
};

export default Attendence;
