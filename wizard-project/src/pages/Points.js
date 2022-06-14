import React from "react";
import PointsView from "../components/point/PointsView";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Points = () => {
  return (
    <LayoutContiner>
      <SubNav project="All Point" addproject="addpoint" />
      <PointsView />
    </LayoutContiner>
  );
};

export default Points;
