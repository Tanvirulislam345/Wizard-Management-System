import React from "react";
import { LayoutContiner } from "../styles/MetarialStyles";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import { useState } from "react";
import ProjectCategory from "../components/settings/ProjectCategory";
import PaymentMethod from "../components/settings/PaymentMethod";
import PaymentStatus from "../components/settings/PaymentStatus";

const Settings = () => {
  const [data, setData] = useState("Project Category");
  const navValue = ["Project Category", "Payment Method", "Payment Status"];
  return (
    <LayoutContiner>
      <HeadingFormatContainer>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>
      {data === "Project Category" && <ProjectCategory />}
      {data === "Payment Method" && <PaymentMethod />}
      {data === "Payment Status" && <PaymentStatus />}
    </LayoutContiner>
  );
};

export default Settings;
