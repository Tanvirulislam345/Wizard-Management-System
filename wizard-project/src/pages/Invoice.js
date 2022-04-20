import React from "react";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import InvoicePrintDawnload from "../components/shared/Invoice/InvoicePrintDawnload";
import InvoicePaper from "../components/shared/Invoice/InvoicePaper";

const Invoice = () => {
  return (
    <LayoutContiner>
      <SubNav2 project="Invoice" />
      <InvoicePrintDawnload></InvoicePrintDawnload>
      <InvoicePaper></InvoicePaper>
    </LayoutContiner>
  );
};

export default Invoice;
