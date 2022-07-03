import React, { useState } from "react";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import AddTransfer from "../components/transfer/AddTransfer";
import { LayoutContiner } from "../styles/MetarialStyles";

const Transfer = () => {
  const [data, setData] = useState("Transfer List");
  const navValue = ["Transfer List", "Add Transfer"];
  return (
    <LayoutContiner>
      <HeadingFormatContainer sx={{ mb: 2 }}>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>

      {data === "Add Transfer" && <AddTransfer />}
    </LayoutContiner>
  );
};

export default Transfer;
