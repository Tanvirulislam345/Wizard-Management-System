import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ClientList from "../components/clients/ClientList";
import SubNav from "../components/subNav/SubNav";
import { LayoutContiner } from "../styles/MetarialStyles";

const Clients = () => {
  const [clients, setClient] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/client")
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(
        `http://localhost:9000/client/delete/${id}`
      )
      .then((res) => {
        if (res.status === 200) {
          setClient(clients?.filter((client) => client.ClientId !== id));
        }
      });
  };

  return (
    <LayoutContiner>
      <SubNav project="Clients" addproject="addclient"></SubNav>

      <Grid container spacing={2}>
        {clients?.map((client, index) => (
          <ClientList
            key={index}
            client={client}
            handleRemove={handleRemove}
          ></ClientList>
        ))}
      </Grid>
    </LayoutContiner>
  );
};

export default Clients;
