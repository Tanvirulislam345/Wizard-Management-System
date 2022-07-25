import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvoicePage from "../components/shared/Invoice/InvoicePage";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const ClientInvoice = () => {
  const { projectId } = useParams();
  const [invoiceData, setClientDetails] = useState(null);
  const [clientData, setClientData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:9000/project/${projectId}`)
      .then((res) => setClientDetails(res.data));
    if (invoiceData !== null) {
      axios
        .get(
          `http://localhost:9000/client/${invoiceData?.ClientId}`
        )
        .then((res) => setClientData(res.data));
    }
  }, [projectId, invoiceData?.ClientId]);
  return (
    <LayoutContiner>
      <SubNav2 project="Invoice" />
      {invoiceData !== null && clientData !== null && (
        <InvoicePage invoiceData={invoiceData} clientData={clientData} />
      )}
    </LayoutContiner>
  );
};

export default ClientInvoice;
