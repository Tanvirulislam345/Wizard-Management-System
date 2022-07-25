import axios from "axios";
import React, { useEffect, useState } from "react";
import NoticeTable from "../components/notice/NoticeTable";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";
const Notice = () => {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    axios
      .get("https://wizard-software-technology.rpi.gov.bd/notice")
      .then((res) => setRows(res.data));
  }, []);

  const handleChange = (id) => {
    axios
      .delete(
        `https://wizard-software-technology.rpi.gov.bd/notice/delete/${id}`
      )
      .then((res) => setRows(rows.filter((row) => row.id !== id)));
  };

  return (
    <LayoutContiner>
      <SubNav project="Make Notice" addproject="addNotice" />
      {rows?.length > 0 && (
        <NoticeTable rows={rows} handleChange={handleChange} />
      )}
    </LayoutContiner>
  );
};
export default Notice;
