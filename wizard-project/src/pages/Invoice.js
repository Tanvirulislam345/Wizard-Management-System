import React from "react";
import { useParams } from "react-router-dom";
import InvoiceBody from "../components/shared/Invoice/InvoiceBody";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const Invoice = () => {
  const { invoiceId } = useParams();

  return (
    <LayoutContiner>
      <SubNav2 project="Invoice" />
      <InvoiceBody />
    </LayoutContiner>
  );
};

export default Invoice;
