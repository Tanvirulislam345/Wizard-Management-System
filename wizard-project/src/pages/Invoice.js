import React from "react";
import InvoiceBody from "../components/shared/Invoice/InvoiceBody";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const Invoice = () => {
  return (
    <LayoutContiner>
      <SubNav2 project="Invoice" />
      <InvoiceBody />
    </LayoutContiner>
  );
};

export default Invoice;
