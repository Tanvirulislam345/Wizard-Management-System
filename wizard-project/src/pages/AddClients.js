import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddClientForm from "../components/clients/AddClientForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const AddClients = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (data !== null) {
      axios.post("http://localhost:9000/addclient", data).then((res) => {
        if (res.status === 200) {
          navigate("/client");
        }
      });
    } else {
      alert("Please Enter all data");
    }
  };
  return (
    <LayoutContiner>
      <SubNav2 project="Add Client" />
      <AddClientForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default AddClients;
