import React, { useState } from "react";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import AddPaymentForm from "../components/payment/AddPaymentForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPayment = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (data !== null) {
      axios.post(`http://localhost:9000/addpayment`, data).then((res) => {
        if (res.status === 200) {
          navigate("/payment");
        }
      });
      // console.log(data);
    } else {
      alert("please fillup all input");
    }
  };
  return (
    <LayoutContiner>
      <SubNav2 project="Add Payment" />
      <AddPaymentForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default AddPayment;
