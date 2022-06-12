import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvoicePage from "../components/shared/Invoice/InvoicePage";
import InvoicePage2 from "../components/shared/Invoice/InvoicePage2";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const Invoice2 = () => {
  const { invoice } = useParams();
  console.log(invoice);
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/salary/invoice/${invoice}`)
      .then((res) => setInvoiceData(res.data));
  }, []);
  return (
    <LayoutContiner>
      <SubNav2 project="Invoice" />
      {invoiceData !== null && <InvoicePage2 invoiceData={invoiceData} />}
    </LayoutContiner>
  );
};

export default Invoice2;
