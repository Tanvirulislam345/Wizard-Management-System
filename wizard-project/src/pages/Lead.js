import axios from "axios";
import React, { useEffect, useState } from "react";
import LeadList from "../components/lead/LeadList";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Lead = () => {
  const [rows, setRows] = useState(null);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:9000/lead")
      .then((res) => setRows(res.data));
  }, [status]);

  const handleChange = (id, value) => {
    const data = {
      Status: value,
    };

    axios
      .put(`http://localhost:9000/lead/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          setStatus(!status);
        }
      });
  };
  return (
    <LayoutContiner>
      <SubNav project="Lead" addproject="addlead" />
      {rows !== null && <LeadList rows={rows} handleChange={handleChange} />}
    </LayoutContiner>
  );
};

export default Lead;
