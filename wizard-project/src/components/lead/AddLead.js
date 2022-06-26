import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutContiner } from "../../styles/MetarialStyles";
import SubNav2 from "../subNav/SubNav2";
import LeadForm from "./LeadForm";

const AddLead = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const handleSubmit = () => {
    const newData = {
      ...data,
      Status: "Pendding",
    };
    axios.post("http://localhost:9000/lead", newData).then((res) => {
      if (res.status === 200) {
        navigate("/lead");
      }
    });
  };
  return (
    <LayoutContiner>
      <SubNav2 project="Add Lead" />
      <LeadForm handleSubmit={handleSubmit} data={data} setData={setData} />
    </LayoutContiner>
  );
};

export default AddLead;
