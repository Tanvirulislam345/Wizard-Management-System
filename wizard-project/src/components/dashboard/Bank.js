import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Categori from "./Categori";

const Bank = () => {
  const [cash, setCash] = useState(null);
  const [cityBank, setSityBank] = useState(null);
  const [bankAsia, setBankAsia] = useState(null);
  const [expense1, setExpense1] = useState(null);
  const [expense2, setExpense2] = useState(null);
  const [expense3, setExpense3] = useState(null);

  const data1 = {
    Name: "City Bank",
    Number: cityBank - expense1,
  };
  const data2 = {
    Name: "Bank Asia",
    Number: bankAsia - expense2,
  };
  const data3 = {
    Name: "Cash",
    Number: cash - expense3,
  };

  useEffect(() => {
    axios.get(`http://localhost:9000/allpayment`).then((res) => {
      const data = res.data;
      const value = data.filter((value) => {
        if (value.PaymentMethod === "City Bank") {
          return value;
        }
      });

      const value1 = value.map((value) => {
        return value.Payment;
      });

      const value2 = data.filter((value) => {
        if (value.PaymentMethod === "Bank Asia") {
          return value;
        }
      });

      const value3 = value2.map((value) => {
        return value.Payment;
      });

      const value4 = data.filter((value) => {
        if (value.PaymentMethod === "Cash") {
          return value;
        }
      });

      const value5 = value4.map((value) => {
        return value.Payment;
      });

      const ini = 0;
      const result =
        (value1.length > 0 && value1.reduce((pre, post) => pre + post, ini)) ||
        0;
      const result2 =
        (value3.length > 0 && value3.reduce((pre, post) => pre + post, ini)) ||
        0;

      const result3 =
        (value5.length > 0 && value5.reduce((pre, post) => pre + post, ini)) ||
        0;

      setSityBank(result);
      setBankAsia(result2);
      setCash(result3);
    });

    axios.get(`http://localhost:9000/allexpense`).then((res) => {
      const data = res.data;
      const value = data.filter((value) => {
        if (value.PaymentMethod === "City Bank") {
          return value;
        }
      });

      const value1 = value.map((value) => {
        return value.TotalAmount;
      });

      const value2 = data.filter((value) => {
        if (value.PaymentMethod === "Bank Asia") {
          return value;
        }
      });

      const value3 = value2.map((value) => {
        return value.TotalAmount;
      });

      const value4 = data.filter((value) => {
        if (value.PaymentMethod === "Cash") {
          return value;
        }
      });

      const value5 = value4.map((value) => {
        return value.TotalAmount;
      });

      const ini = 0;
      const result =
        (value1.length > 0 && value1.reduce((pre, post) => pre + post, ini)) ||
        0;
      const result2 =
        (value3.length > 0 && value3.reduce((pre, post) => pre + post, ini)) ||
        0;

      const result3 =
        (value5.length > 0 && value5.reduce((pre, post) => pre + post, ini)) ||
        0;

      setExpense1(result);
      setExpense2(result2);
      setExpense2(result3);
    });
  }, []);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Categori data={data3} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Categori data={data1} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Categori data={data2} />
      </Grid>
    </>
  );
};

export default Bank;
