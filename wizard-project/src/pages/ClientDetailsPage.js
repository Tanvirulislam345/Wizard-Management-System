import axios from "axios";
import React, { useEffect, useState } from "react";
import ClientDetails from "../components/projects/ClientDetails";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";

const ClientDetailsPage = ({ clientId }) => {
  const [clientDetails, setClientDetails] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://localhost:9000/projectclient/${clientId}`
      )
      .then((res) => setClientDetails(res.data[0]));
  }, [clientId]);

  return (
    <HeadingFormat title="Client Details">
      {clientDetails != null && <ClientDetails clientDetails={clientDetails} />}
    </HeadingFormat>
  );
};

export default ClientDetailsPage;
