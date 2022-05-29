import React, { useEffect, useState } from "react";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import AddPaymentForm from "../components/payment/AddPaymentForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPayment = () => {
  const [data, setData] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [projectId, setProjectId] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = () => {
    const newData = {
      ...data,
      BillNo: `WizB22${Math.random().toString(36).slice(7)}`,
    };
    if (data !== null) {
      axios.post(`http://localhost:9000/addpayment`, newData).then((res) => {
        if (res.status === 200) {
          navigate("/payment");
        }
      });
      console.log(newData);
    } else {
      alert("please fillup all input");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/client")
      .then((res) => setClientId(res.data));

    axios
      .get("http://localhost:9000/allproject")
      .then((res) => setProjectId(res.data));
  }, []);

  return (
    <LayoutContiner>
      <SubNav2 project="Add Payment" />
      {clientId !== null && projectId !== null && (
        <AddPaymentForm
          data={data}
          setData={setData}
          handleSubmit={handleSubmit}
          ProjectId={projectId}
          ClientId={clientId}
        />
      )}
    </LayoutContiner>
  );
};

export default AddPayment;
