import axios from "axios";
import React, { useEffect, useState } from "react";
import LeaveTypeList from "../../components/leave/LeaveTypeList";
import SubNav from "../../components/subNav/SubNav";
import { LayoutContiner } from "../../styles/MetarialStyles";

const LeaveType = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/allexpense")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  const handleChange = (id) => {
    axios.delete(`http://localhost:9000/allexpense/${id}`).then((res) => {
      if (res.status === 200) {
        setRows(rows.filter((row) => row.id !== id));
      }
    });
  };
  return (
    <LayoutContiner>
      <SubNav project="Leave Type" addproject="leavetype" />
      <LeaveTypeList rows={rows} handleChange={handleChange} />
    </LayoutContiner>
  );
};

export default LeaveType;
