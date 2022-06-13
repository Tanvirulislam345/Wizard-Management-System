import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddClientForm from "../components/clients/AddClientForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const AddClients = () => {
  const gender = [{ gender: "Male" }, { gender: "Female" }];
  const payment = [{ method: "Cash" }, { method: "Card" }];

  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const Password = Math.random().toString(30).slice(-8);
    const ClientId = `Wiz22${Math.random().toString(36).slice(7)}`;

    const newData = {
      ...data,
      Role: "client",
      ClientId,
      Password,
    };

    const formData = new FormData();
    for (const key in newData) {
      formData.append(key, newData[key]);
    }

    if (data !== null) {
      axios.post("http://localhost:9000/addclient", formData).then((res) => {
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
        gender={gender}
        payment={payment}
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default AddClients;
