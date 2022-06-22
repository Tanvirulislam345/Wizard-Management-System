import axios from "axios";
import React, { useEffect, useState } from "react";
import LoanTable from "./LoanTable";

const LoanView = () => {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:9000/loan").then((res) => setRows(res.data));
  }, []);

  const handleChange = () => {};
  return (
    <div>
      {rows?.length > 0 && (
        <LoanTable rows={rows} handleChange={handleChange} />
      )}
    </div>
  );
};

export default LoanView;
