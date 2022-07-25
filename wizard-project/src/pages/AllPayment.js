import React, { useEffect, useState } from "react";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";
import PaymentList from "../components/payment/PaymentList";
import axios from "axios";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import DashboardFilter from "../components/dashboard/DashboardFilter";
import * as XLSX from "xlsx";

const AllPayment = () => {
  const bank = [
    { id: 1, Item: "Cash" },
    { id: 2, Item: "City Bank" },
    { id: 3, Item: "Bank Asia" },
  ];

  const [filterValue, setFilterValue] = useState(null);
  const [data, setData] = useState("All Payment");
  const navValue = ["All Payment"];
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("https://wizard-software-technology.rpi.gov.bd/allpayment")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  const handleSearch = (id) => {
    axios
      .delete(`https://wizard-software-technology.rpi.gov.bd/allpayment/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setRows(rows.filter((row) => row.id !== id));
        }
      });
    if (filterValue !== null) {
      axios
        .post(
          `https://wizard-software-technology.rpi.gov.bd/income_categori_search`,
          filterValue
        )
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            setRows(data);
          }
        });
    }
  };
  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "MyExpense");
    XLSX.writeFile(wb, "incomeExpense.xlsx");
  };

  return (
    <LayoutContiner>
      <HeadingFormatContainer>
        <ProfileNav navValue={navValue} data={data} setData={setData} />
      </HeadingFormatContainer>

      {data === "All Payment" && rows?.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <SubNav project="All Payment" addproject="addpayment" />
          <DashboardFilter
            employee={bank}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            handleSearch={handleSearch}
            handleDownload={handleDownload}
          />
          <PaymentList rows={rows} handleChange={handleSearch} />
        </div>
      )}
    </LayoutContiner>
  );
};

export default AllPayment;
