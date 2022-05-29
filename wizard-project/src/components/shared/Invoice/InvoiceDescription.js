import React from "react";

const InvoiceDescription = ({ projectId, discount, tax, amount }) => {
  const totalAmount = amount + (amount / discount) * 100 + (amount / tax) * 100;
  return (
    <>
      <table style={{ margin: "30px 0px" }}>
        <thead>
          <tr>
            <th colspan="2">Project Id</th>
            <th>HOURS</th>
            <th style={{ textAlign: "center" }}>Unit</th>
            <th style={{ textAlign: "right" }}>AMOUNT</th>
          </tr>
        </thead>
        <tbody style={{ width: "100%", marginLeft: "auto" }}>
          <tr>
            <td colspan="2">{projectId}</td>
            <td></td>
            <td style={{ textAlign: "center" }}></td>
            <td style={{ textAlign: "right" }}>{amount} USD</td>
          </tr>
          <tr>
            <td colspan="2" style={{ borderBottom: "none" }}></td>
            <th>Tax</th>
            <td
              colspan="2"
              style={{ textAlign: "right", paddingRight: "13px" }}
            >
              {tax} %
            </td>
          </tr>
          <tr>
            <td colspan="2" style={{ borderBottom: "none" }}></td>
            <th>Discount</th>
            <td
              colspan="2"
              style={{ textAlign: "right", paddingRight: "13px" }}
            >
              {discount} %
            </td>
          </tr>
          <tr>
            <td colspan="2" style={{ borderBottom: "none" }}></td>
            <th>Total</th>
            <td colspan="2" style={{ textAlign: "right" }}>
              {Math.ceil(totalAmount)} USD
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default InvoiceDescription;
