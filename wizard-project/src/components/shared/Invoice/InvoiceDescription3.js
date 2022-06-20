import { TableBody, TableHead } from "@mui/material";
import React from "react";

const InvoiceDescription3 = ({ invoice, Tax, Discount }) => {
  const value2 = invoice?.map((valu) => {
    return valu.Subtotal;
  });

  const ini = 0;
  const value = value2.reduce(
    (pre, pre1) => parseInt(pre) + parseInt(pre1),
    ini
  );

  const discount = value - (Discount * value) / 100;
  const totalvalue = discount + (Tax * discount) / 100;
  return (
    <>
      <table>
        <TableHead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th style={{ textAlign: "right", paddingRight: "13px" }}>
              SubTotal
            </th>
          </tr>
        </TableHead>
        {invoice?.map((data, index) => (
          <TableBody key={index}>
            <tr>
              <td>{data.ItemName}</td>
              <td>{data.Quantity}</td>
              <td>{data.Price} Taka</td>
              <td style={{ textAlign: "right", paddingRight: "13px" }}>
                {data.Subtotal} Taka
              </td>
            </tr>
          </TableBody>
        ))}
      </table>
      <table>
        <TableBody>
          <tr>
            <th>Total</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Math.ceil(value)} Taka
            </td>
          </tr>
          <tr>
            <th>Tex</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Tax} %
            </td>
          </tr>
          <tr>
            <th>Discount</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Discount} %
            </td>
          </tr>
          <tr>
            <th>Payable</th>
            <td style={{ textAlign: "right", paddingRight: "13px" }}>
              {Math.ceil(totalvalue)} Taka
            </td>
          </tr>
        </TableBody>
      </table>
    </>
  );
};

export default InvoiceDescription3;
