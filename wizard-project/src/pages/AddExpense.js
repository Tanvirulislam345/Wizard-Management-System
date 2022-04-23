import React, { useState } from "react";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddExpenseForm from "../components/expense/AddExpenseForm";

const AddExpense = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (data !== null) {
      axios.post(`http://localhost:9000/addexpense`, data).then((res) => {
        if (res.status === 200) {
          navigate("/expense");
        }
      });
      //   console.log(data);
    } else {
      alert("please fillup all input");
    }
  };
  return (
    <LayoutContiner>
      <SubNav2 project="Add Expense" />
      <AddExpenseForm
        data={data}
        setData={setData}
        handleSubmit={handleSubmit}
      />
    </LayoutContiner>
  );
};

export default AddExpense;