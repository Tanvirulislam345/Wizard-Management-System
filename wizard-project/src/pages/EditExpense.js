import React, { useEffect, useState } from "react";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import EditExpenseForm from "../components/expense/EditExpenseForm";

const EditExpense = () => {
  const [values, setValues] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { expenseId } = useParams();
  console.log(expenseId);

  const handleSubmit = () => {
    if (data !== null) {
      axios
        .put(
          `http://localhost:9000/allexpense/${expenseId}`,
          data
        )
        .then((res) => {
          if (res.status === 200) {
            navigate("/expense");
          }
        });
      //   console.log(data);
    } else {
      alert("Nothing to Edit");
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:9000/allexpense/${expenseId}`
      )
      .then((res) => setValues(res.data));
  }, [expenseId]);

  console.log(
    `http://localhost:9000/allexpense/${expenseId}`
  );

  return (
    <LayoutContiner>
      <SubNav2 project="Edit Expense" />
      {values !== null && (
        <EditExpenseForm
          data={data}
          setData={setData}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </LayoutContiner>
  );
};

export default EditExpense;
