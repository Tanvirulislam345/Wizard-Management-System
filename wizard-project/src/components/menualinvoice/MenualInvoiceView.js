import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LayoutContiner } from "../../styles/MetarialStyles";
import InvoicePage3 from "../shared/Invoice/InvoicePage3";
import SubNav2 from "../subNav/SubNav2";

const MenualInvoiceView = () => {
  const { menualid } = useParams();
  const [invoiceData, setInvoiceData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://localhost:9000/menualinvoice/${menualid}`
      )
      .then((res) => setInvoiceData(res.data));
  }, [menualid]);
  return (
    <LayoutContiner>
      <SubNav2 project="Invoice" />

      {invoiceData !== null && <InvoicePage3 invoiceData={invoiceData} />}
    </LayoutContiner>
  );
};

export default MenualInvoiceView;
