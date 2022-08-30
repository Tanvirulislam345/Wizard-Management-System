import React, { useEffect, useState } from "react";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import EditPaymentForm from "../components/payment/EditPaymentForm";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPayment = () => {
  const [values, setValues] = useState(null);
  const [data, setData] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [projectId, setProjectId] = useState(null);

  const { paymentId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .put(`https://wiztecbd.online/api/allpayment/${paymentId}`, data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/payment");
        }
      });
    console.log(data);
  };

  useEffect(() => {
    axios
      .get(`https://wiztecbd.online/api/allpayment/${paymentId}`)
      .then((res) => setValues(res.data));

    axios
      .get("https://wiztecbd.online/api/client")
      .then((res) => setClientId(res.data));

    axios
      .get("https://wiztecbd.online/api/allproject")
      .then((res) => setProjectId(res.data));
  }, [paymentId]);

  return (
    <LayoutContiner>
      <SubNav2 project="Add Payment" />
      {values !== null && clientId !== null && projectId !== null && (
        <EditPaymentForm
          data={data}
          setData={setData}
          handleSubmit={handleSubmit}
          ProjectId={projectId}
          ClientId={clientId}
          values={values}
        />
      )}
    </LayoutContiner>
  );
};

export default EditPayment;
