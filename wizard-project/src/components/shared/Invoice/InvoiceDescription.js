import React from "react";

const InvoiceDescription = ({ invoiceData }) => {
  const {
    Budget,
    Discount,
    Tax,
    Due,
    TotalPayment,
    TotalPayable,
    ProjectId,
    ProjectTitle,
  } = invoiceData;

  return (
    <>
      <table style={{ margin: "30px 0px" }}>
        <thead>
          <tr>
            <th>Project Id</th>
            <th colSpan="2">Description</th>
            <th colSpan="2" style={{ textAlign: "right" }}>
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ProjectId}</td>
            <td colSpan="2">{ProjectTitle}</td>
            <td colSpan="2" style={{ textAlign: "right" }}></td>
          </tr>
          <tr>
            <td style={{ borderBottom: "none" }}></td>
            <td style={{ borderBottom: "none" }}></td>
            <th>Budget</th>
            <td style={{ textAlign: "right" }}>{Budget} Taka</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "none" }}></td>
            <td style={{ borderBottom: "none" }}></td>
            <th>Tax</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Tax} %
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: "none" }}></td>
            <td style={{ borderBottom: "none" }}></td>
            <th>Discount</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Discount} %
            </td>
          </tr>
          <tr>
            <td style={{ borderBottom: "none" }}></td>
            <td style={{ borderBottom: "none" }}></td>
            <th>Total Paybale</th>
            <td style={{ textAlign: "right" }}>{TotalPayable} Taka</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "none" }}></td>
            <td style={{ borderBottom: "none" }}></td>
            <th>Total Payment</th>
            <td style={{ textAlign: "right" }}>{TotalPayment} Taka</td>
          </tr>
          <tr>
            <td style={{ borderBottom: "none" }}></td>
            <td style={{ borderBottom: "none" }}></td>
            <th> Due</th>
            <td style={{ textAlign: "right" }}>{Due} Taka</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default InvoiceDescription;
