import React, { useState } from "react";
import PayableSalary from "../components/salary/PayableSalary";
import SalaryView from "../components/salary/SalaryView";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import { useAuth } from "../Context/ContextProvieder";
import { LayoutContiner } from "../styles/MetarialStyles";

const Salary = () => {
  const { user } = useAuth();
  const [data, setData] = useState("Salary");
  const navValue = ["Salary", "Payable Salary"];
  return (
    <LayoutContiner>
      <HeadingFormatContainer>
        {user?.Role !== "admin" ? (
          <ProfileNav navValue={["Salary"]} data={data} setData={setData} />
        ) : (
          <ProfileNav navValue={navValue} data={data} setData={setData} />
        )}
      </HeadingFormatContainer>
      {data === "Salary" && <SalaryView />}
      {data === "Payable Salary" && <PayableSalary />}
    </LayoutContiner>
  );
};

export default Salary;
