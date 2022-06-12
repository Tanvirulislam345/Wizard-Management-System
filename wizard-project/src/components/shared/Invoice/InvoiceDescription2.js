import React from "react";

const InvoiceDescription2 = ({ invoiceData }) => {
  const {
    EmployeeId,
    FullName,
    Basicsalary,
    FoodAllowance,
    MobileAllowance,
    TravelAllowance,
    TotalAbsent,
    TotalLate,
    TotalSalary,
    TotalDiduction,
    TotalPayment,
    PerformanceBonus,
    FestivalAllowance,
    FoodDeduction,
  } = invoiceData;

  return (
    <>
      <table>
        <tr>
          <th colSpan="2" style={{ textAlign: "center" }}>
            EmployeeId Id
          </th>
          <th colSpan="2" style={{ textAlign: "center" }}>
            Name
          </th>
        </tr>
        <tr>
          <td colSpan="2" style={{ textAlign: "center" }}>
            {EmployeeId}
          </td>
          <td colSpan="2" style={{ textAlign: "center" }}>
            {FullName}
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th colSpan="2" style={{ textAlign: "center" }}>
            Earnings
          </th>
          <th colSpan="2" style={{ textAlign: "center" }}>
            Deductions
          </th>
        </tr>
        <tr>
          <th> Basic salary</th>
          <td style={{ textAlign: "right" }}>{Basicsalary} Taka</td>
          <th>Total Absent</th>
          <td style={{ textAlign: "right" }}>{TotalAbsent} Day</td>
        </tr>
        <tr>
          <th> Food Allowance</th>
          <td style={{ textAlign: "right" }}>{FoodAllowance} Taka</td>
          <th>Total Late</th>
          <td style={{ textAlign: "right" }}>{TotalLate} Day</td>
        </tr>
        <tr>
          <th>Performance Bonus</th>
          <td style={{ textAlign: "right" }}>{PerformanceBonus} Taka</td>
          <th>Food Deduction</th>
          <td style={{ textAlign: "right" }}>{FoodDeduction} Taka</td>
        </tr>
        <tr>
          <th>Mobile Allowance</th>
          <td style={{ textAlign: "right" }}>{MobileAllowance} Taka</td>
        </tr>
        <tr>
          <th> Travel Allowance</th>
          <td style={{ textAlign: "right" }}>{TravelAllowance} Taka</td>
        </tr>
        <tr>
          <th>Festival Allowance</th>
          <td style={{ textAlign: "right" }}>{FestivalAllowance} Taka</td>
        </tr>
      </table>
      <table>
        <tr>
          <th colSpan="2" style={{ textAlign: "center" }}>
            Total Earning
          </th>
          <td colSpan="2" style={{ textAlign: "right" }}>
            {TotalSalary} Taka
          </td>
        </tr>
        <tr>
          <th colSpan="2" style={{ textAlign: "center" }}>
            Total Diduction
          </th>
          <td colSpan="2" style={{ textAlign: "right" }}>
            {TotalDiduction} Taka
          </td>
        </tr>

        <tr>
          <th colSpan="2" style={{ textAlign: "center" }}>
            Total Payable Salary
          </th>
          <td colSpan="2" style={{ textAlign: "right" }}>
            {TotalPayment} Taka
          </td>
        </tr>
      </table>
    </>
  );
};

export default InvoiceDescription2;
