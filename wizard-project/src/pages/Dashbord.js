import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Categori from "../components/dashboard/Categori";
import SearchCapital from "../components/dashboard/SearchCapital";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
const Dashbord = () => {
  const [Project, setProject] = useState(null);
  const [client, setClient] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [present, setPresent] = useState(null);
  const [late, setLate] = useState(null);
  const [absent, setAbsent] = useState(null);

  useEffect(() => {
    const running = "Running";
    axios.get(`http://localhost:9000/allproject/${running}`).then((res) => {
      const data = res.data;
      setProject({
        Name: "Project",
        Number: data.length,
      });
    });

    axios.get(`http://localhost:9000/client`).then((res) => {
      const data = res.data;

      setClient({
        Name: "Client",
        Number: data.length,
      });
    });

    axios.get(`http://localhost:9000/employee`).then((res) => {
      const data = res.data;
      setEmployee({
        Name: "Employee",
        Number: data.length,
      });
    });

    axios.get(`http://localhost:9000/allattendence/present`).then((res) => {
      const data = res.data;
      const present = data.filter((da) => da.Status === "present");
      const late = data.filter((da) => da.Status === "late");
      const absent = data.filter((da) => da.Status === "absent");
      const Present = {
        Name: "Todays Present",
        Number: present.length,
      };
      const Late = {
        Name: "Todays Late",
        Number: late.length,
      };
      const Absent = {
        Name: "Todays Absent",
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
        <Grid item xs={12} sm={6} md={4}>
          {present !== null && <Categori data={present} />}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {late !== null && <Categori data={late} />}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {absent !== null && <Categori data={absent} />}
        </Grid>
        <Grid item xs={12}>
          <SearchCapital />
        </Grid>
      </Grid>
    </LayoutContiner>
  );
};

export default Dashbord;
