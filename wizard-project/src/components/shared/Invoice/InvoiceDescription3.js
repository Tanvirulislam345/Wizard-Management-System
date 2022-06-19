import { TableBody, TableHead } from "@mui/material";
import React from "react";

const InvoiceDescription3 = ({ invoice }) => {
  console.log(invoice);
  return (
    <>
      <table>
        <TableHead>
          <tr>
            <th colSpan="2">Project Id</th>
            <th colSpan="2">Project Title</th>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <th colSpan="2">Description</th>
            <th colSpan="2" style={{ textAlign: "right" }}>
              Amount
            </th>
          </tr>
          {/* <tr>
            <td rowSpan="2" colSpan="2"></td>
            <td rowSpan="2" colSpan="2" style={{ textAlign: "right" }}>
              Taka
            </td>
          </tr> */}
        </TableHead>

        {invoice?.map((data) => (
          <TableBody>
            <tr>
              <td colSpan="2" style={{ border: "none" }}></td>
              <th>Item Name</th>
              <td style={{ textAlign: "right", paddingRight: "13px" }}>
                {data.ItemName}
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ border: "none" }}></td>
              <th>Quantity</th>
              <td style={{ textAlign: "right", paddingRight: "13px" }}>
                {data.Quantity}
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ border: "none" }}></td>
              <th>Price</th>
              <td style={{ textAlign: "right", paddingRight: "13px" }}>
                {data.Price}
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ border: "none" }}></td>
              <th>Sub Total</th>
              <td style={{ textAlign: "right", paddingRight: "13px" }}>
                {data.Subtotal}
              </td>
            </tr>
          </TableBody>
        ))}
      </table>
    </>
  );
};

export default InvoiceDescription3;
