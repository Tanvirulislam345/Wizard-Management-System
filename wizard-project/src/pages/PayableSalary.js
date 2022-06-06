import axios from "axios";
import React, { useEffect, useState } from "react";
import PayableSalarayTable from "../components/salary/PayableSalarayTable";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const PayableSalary = () => {
  const [employee, setEmployee] = useState(null);
  const [attendence, setAttendence] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/employee`)
      .then((res) => setEmployee(res.data));

    axios
      .get(`http://localhost:9000/allattendence`)
      .then((res) => setAttendence(res.data));
  }, []);

  const data = employee?.map((em) => {
    const value = attendence?.filter((at) => at.EmployeeId === em.EmployeeId);
    const ondaySalary = em?.Basicsalary / value?.length;
    const late = value?.filter((at) => at.Status === "late").length || 0;
    const absent = value?.filter((at) => at.Status === "absent").length || 0;
    const TotalSalary =
      em?.Basicsalary +
      em?.FoodAllowance +
      em?.MobileAllowance +
      em?.TravelAllowance;
    const TotalDiduction =
      Math.floor((ondaySalary / 2) * late + ondaySalary * absent) || 0;
    const TotalPayable = TotalSalary - TotalDiduction;
    return {
      EmployeeId: em.EmployeeId,
      FullName: em.FullName,
      Basicsalary: em?.Basicsalary,
      FoodAllowance: em?.FoodAllowance,
      MobileAllowance: em?.MobileAllowance,
      TravelAllowance: em?.TravelAllowance,
      FestivalAllowance: em?.FestivalAllowance,
      TotalLate: late,
      TotalAbsent: absent,
      TotalSalary,
      TotalDiduction,
      TotalPayable,
    };
    // console.log(data);
  });
  return (
    <LayoutContiner>
      <SubNav2 project="Employee Payable Salary" />
      {data && data.length > 0 && <PayableSalarayTable rows={data} />}
    </LayoutContiner>
  );
};

export default PayableSalary;
