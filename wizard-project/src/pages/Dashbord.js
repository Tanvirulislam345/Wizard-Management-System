import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Categori from "../components/dashboard/Categori";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
const Dashbord = () => {
  const [Project, setProject] = useState(null);
  const [income, setIncome] = useState(null);
  const [present, setPresent] = useState(null);
  const [late, setLate] = useState(null);
  const [absent, setAbsent] = useState(null);
  const [expense, setExpense] = useState(null);
  const [client, setClient] = useState(null);
  const [employee, setEmployee] = useState(null);

  const Profit = parseInt(income?.Number) - parseInt(expense?.Number);
  const data = {
    Name: "Profit",
    Number: `${Profit} Taka`,
  };
  useEffect(() => {
    const running = "Running";
    axios.get(`http://localhost:9000/allproject/${running}`).then((res) => {
      const data = res.data;
      const datas = {
        Name: "Project",
        Number: data.length,
      };
      setProject(datas);
    });

    axios.get(`http://localhost:9000/allproject`).then((res) => {
      const data = res.data;
      let value = data[0].Budget;
      if (data.length > 1) {
        value = data.reduce((pre, post) => {
          return pre.Budget + post.Budget;
        });
      }

      const datas = {
        Name: "Income",
        Number: `${value} Taka`,
      };
      setIncome(datas);
    });

    axios.get(`http://localhost:9000/allexpense`).then((res) => {
      const data = res.data;
      let value = data[0].TotalAmount;
      if (data.length > 1) {
        value = data.reduce((pre, post) => {
          return pre.TotalAmount + post.TotalAmount;
        });
      }
      const datas = {
        Name: "Expense",
        Number: `${value} Taka`,
      };
      setExpense(datas);
      //   console.log(value);
    });

    axios.get(`http://localhost:9000/client`).then((res) => {
      const data = res.data;
      const datas = {
        Name: "Client",
        Number: data.length,
      };
      setClient(datas);
    });

    axios.get(`http://localhost:9000/employee`).then((res) => {
      const data = res.data;
      const datas = {
        Name: "Employee",
        Number: data.length,
      };
      setEmployee(datas);
    });

    axios.get(`http://localhost:9000/allattendence/present`).then((res) => {
      const data = res.data;
      const present = data.filter((da) => da.Status === "present");
      const late = data.filter((da) => da.Status === "late");
      const absent = data.filter((da) => da.Status === "absent");
      const Present = {
        Name: "Present",
        Number: present.length,
      };
      const Late = {
        Name: "Late",
        Number: late.length,
      };
      const Absent = {
        Name: "Absent",
        Number: absent.length,
      };
      setPresent(Present);
      setLate(Late);
      setAbsent(Absent);
    });
  }, []);

  return (
    <LayoutContiner>
      <SubNav2 project="Dashboard" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          {Project !== null && <Categori data={Project} />}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {client !== null && <Categori data={client} />}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {employee !== null && <Categori data={employee} />}
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {present !== null && <Categori data={present} />}
            </Grid>
            <Grid item xs={12} md={6}>
              {late !== null && <Categori data={late} />}
            </Grid>
            <Grid item xs={12} md={6}>
              {absent !== null && <Categori data={absent} />}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {income !== null && <Categori data={income} />}
            </Grid>
            <Grid item xs={12}>
              {expense !== null && <Categori data={expense} />}
            </Grid>
            <Grid item xs={12}>
              {data.Number !== NaN && <Categori data={data} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayoutContiner>
  );
};

export default Dashbord;
