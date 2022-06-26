import React, { useState } from "react";
import {
  HeadingFormatContainer,
  HeadingFormatTitle,
} from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import { LayoutContiner } from "../styles/MetarialStyles";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import LoanView from "../components/loan/LoanView";
import AdjustmentView from "../components/loan/AdjustmentView";

const Loan = () => {
  const [data, setData] = useState("Add Loan");
  const navValue = ["Add Loan", "Adjustment"];
  return (
    <LayoutContiner>
      <HeadingFormatContainer sx={{ mb: 2 }}>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>

      {data === "Add Loan" && (
        <>
          <Link to={`/addloan`}>
            <HeadingFormatTitle
              style={{
                display: "flex",
                justifyContent: "end",
                marginRight: "10px",
              }}
            >
              <AddBoxIcon color="secondary" />
            </HeadingFormatTitle>
          </Link>
          <LoanView />
        </>
      )}

      {data === "Adjustment" && (
        <>
          <Link to={`/addadjustment`}>
            <HeadingFormatTitle
              style={{
                display: "flex",
                justifyContent: "end",
                marginRight: "10px",
              }}
            >
              <AddBoxIcon color="secondary" />
            </HeadingFormatTitle>
          </Link>
          <AdjustmentView />
        </>
      )}
    </LayoutContiner>
  );
};

export default Loan;
