import React, { useState } from "react";
import { HeadingFormatContainer } from "../shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../shared/ProfileNav/ProfileNav";
import ExpenseDashBoard from "./ExpenseDashBoard";
import IncomeDashBoard from "./IncomeDashBoard";

const SearchCapital = () => {
  const [data, setData] = useState("Income");
  const navValue = ["Income", "Expense"];

  return (
    <>
      <HeadingFormatContainer sx={{ mb: 2 }}>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>
      {data === "Income" && <IncomeDashBoard />}
      {data === "Expense" && <ExpenseDashBoard />}
    </>
  );
};

export default SearchCapital;
