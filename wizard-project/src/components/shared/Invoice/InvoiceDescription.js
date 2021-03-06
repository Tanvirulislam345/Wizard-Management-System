import { TableBody, TableHead } from "@mui/material";
import React from "react";

const InvoiceDescription = ({ invoiceData }) => {
  const {
    Budget,
    Discount,
    Tax,
    Payment,
    TotalPayment,
    TotalBudget,
    TotalPayable,
    ProjectId,
    ProjectTitle,
  } = invoiceData;

  return (
    <>
      <table>
        <TableHead>
          <tr>
            <th colSpan="2">Project Id</th>
            <th colSpan="2">Project Title</th>
          </tr>
          <tr>
            <td colSpan="2">{ProjectId}</td>
            <td colSpan="2">{ProjectTitle}</td>
          </tr>
          <tr>
            <th colSpan="2">Description</th>
            <th colSpan="2" style={{ textAlign: "right" }}>
              Amount
            </th>
          </tr>
          <tr>
            <td rowSpan="2" colSpan="2">
              {ProjectTitle}
            </td>
            <td rowSpan="2" colSpan="2" style={{ textAlign: "right" }}>
              {Budget} Taka
            </td>
          </tr>
        </TableHead>
        <TableBody>
          <tr>
            <td colSpan="2" style={{ border: "none" }}></td>
            <th>Tax</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Tax} %
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ border: "none" }}></td>
            <th>Discount</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Discount} %
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ border: "none" }}></td>
            <th>Payment</th>
            <td style={{ textAlign: "right" }}>{Payment} Taka</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ border: "none" }}></td>
            <th>Total Budget</th>
            <td style={{ textAlign: "right" }}>{TotalBudget} Taka</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ border: "none" }}></td>
            <th>Total Payment</th>
            <td style={{ textAlign: "right" }}>{TotalPayment} Taka</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ border: "none" }}></td>
            <th>Total Paybale</th>
            <td style={{ textAlign: "right" }}>{TotalPayable} Taka</td>
          </tr>
        </TableBody>
      </table>
    </>
  );
};

export default InvoiceDescription;
