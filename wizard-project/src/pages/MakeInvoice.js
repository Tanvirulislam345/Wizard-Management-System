import axios from "axios";
import React, { useEffect, useState } from "react";
import InvoiceListMenual from "../components/menualinvoice/InvoiceListMenual";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const MakeInvoice = () => {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:9000/menualinvoice")
      .then((res) => setRows(res.data));
  }, []);

  return (
    <LayoutContiner>
      <SubNav project="Make Invoice" addproject="addmenualinvoice" />
      {rows?.length > 0 && <InvoiceListMenual rows={rows} />}
    </LayoutContiner>
  );
};

export default MakeInvoice;
