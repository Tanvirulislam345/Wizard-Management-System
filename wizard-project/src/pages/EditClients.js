import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditClientForm from "../components/clients/EditClientForm";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EditClients = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(null);
  const [data, setData] = useState(null);
  const { editclientId } = useParams();

  useEffect(() => {
    axios
      .get(`https://wiztecbd.online/api/client/${editclientId}`)
      .then((res) => setValues(res.data));
  }, [editclientId]);

  const handleSubmit = () => {
    if (data !== null) {
      axios
        .put(`https://wiztecbd.online/api/client/${editclientId}`, data)
        .then((res) => {
          if (res.status === 200) {
            navigate("/client");
          }
        });
    } else {
      alert("Does not change anything");
    }
  };
  return (
    <LayoutContiner>
      <SubNav2 project="Edit Client" />
      {values !== null && (
        <EditClientForm
          data={data}
          setData={setData}
          values={values}
          handleSubmit={handleSubmit}
        />
      )}
    </LayoutContiner>
  );
};

export default EditClients;
