import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import AddTransfer from "../components/transfer/AddTransfer";
import TransferTable from "../components/transfer/TransferTable";
import { LayoutContiner } from "../styles/MetarialStyles";

const Transfer = () => {
  const [data, setData] = useState("Transfer List");
  const navValue = ["Transfer List", "Add Transfer"];
  const [rows, setRows] = useState(null);

  useEffect(() => {
    axios
      .get("https://wiztecbd.online/api/transfer_balance")
      .then((res) => setRows(res.data));
  }, []);
  return (
    <LayoutContiner>
      <HeadingFormatContainer sx={{ mb: 2 }}>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>

      {data === "Add Transfer" && <AddTransfer />}
      {data === "Transfer List" && rows?.length > 0 && (
        <TransferTable rows={rows} />
      )}
    </LayoutContiner>
  );
};

export default Transfer;
