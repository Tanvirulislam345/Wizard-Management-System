import axios from "axios";
import React, { useEffect } from "react";
import Categori from "./Categori";

const IncomeDash = ({ demo }) => {
  useEffect(() => {
    axios.get(`http://localhost:9000/allpayment`).then((res) => {
      let data = res.data;
      console.log(data);
    });
  }, []);

  const datas = {
    Name: "Net Income",
    Number: 0,
  };

  return <Categori data={datas}>Hello</Categori>;
};

export default IncomeDash;
