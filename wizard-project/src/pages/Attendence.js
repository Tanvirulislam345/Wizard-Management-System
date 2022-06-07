import React from "react";
import Attendences from "../components/attendence/Attendences";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Attendence = () => {
  return (
    <LayoutContiner>
      <SubNav project="Attendence" addproject="addattendence"></SubNav>
      <Attendences />
    </LayoutContiner>
  );
};

export default Attendence;
