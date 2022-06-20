import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterForm2 from "../components/attendence/FilterForm2";
import Categori from "../components/dashboard/Categori";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import * as XLSX from "xlsx";
import Bank from "../components/dashboard/Bank";
const Dashbord = () => {
  const [Project, setProject] = useState(null);
  const [income, setIncome] = useState(null);
  const [netIncome, setNetIncome] = useState(null);
  const [present, setPresent] = useState(null);
  const [late, setLate] = useState(null);
  const [absent, setAbsent] = useState(null);
  const [expense, setExpense] = useState(null);
  const [client, setClient] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [categori, setCategori] = useState(null);
  const [totalExpense, setTotalExpense] = useState(null);
  const [errors, setErrors] = useState(null);
  const [download, setDownload] = useState(null);
  const [demo, setDemo] = useState(null);

  const Profit = parseInt(netIncome?.Number) - parseInt(expense?.Number);

  const data = {
    Name: "Balance",
    Number: `${Profit} Taka`,
  };

  const Due = parseInt(income?.Number) - parseInt(netIncome?.Number);

  const data2 = {
    Name: "Due",
    Number: `${Due} Taka`,
  };

  useEffect(() => {
    const running = "Running";
    axios.get(`http://localhost:9000/allproject/${running}`).then((res) => {
      const data = res.data;
      setProject({
        Name: "Project",
        Number: data.length,
      });
    });

    axios.get(`http://localhost:9000/allpayment`).then((res) => {
      const data = res.data;
      const value = data.map((value) => {
        return value.Payment;
      });
      const value2 = data.map((value) => {
        return value.TotalBudget;
      });

      const ini = 0;
      const result = value.reduce((pre, post) => pre + post, ini);
      const result2 = value2.reduce((pre, post) => pre + post, ini);

      setNetIncome({
        Name: "Net Income",
        Number: result,
      });
      setIncome({
        Name: "Accepted Income",
        Number: result2,
      });
    });

    axios.get(`http://localhost:9000/allexpense`).then((res) => {
      const data = res.data;

      if (data.length > 0) {
        let value = data[0].TotalAmount;
        if (data.length > 1) {
          value = data.reduce((pre, post) => {
            return pre.TotalAmount + post.TotalAmount;
          });
        }

        setExpense({
          Name: "Expense",
          Number: `${value} Taka`,
        });
      } else {
        setExpense({
          Name: "Expense",
          Number: `${0} Taka`,
        });
      }
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

    axios.get(`http://localhost:9000/expense_categori`).then((res) => {
      setCategori(res.data);
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

  const handleSearch = () => {
    if (filterValue !== null) {
      axios
        .post(`http://localhost:9000/expense_categori_search`, filterValue)
        .then((res) => {
          if (res.data.length > 0) {
            const data = res.data;
            let totalAmount;
            if (data.length > 1) {
              totalAmount = data.reduce((pre, post) => {
                return pre.TotalAmount + post.TotalAmount;
              });
            } else {
              totalAmount = data[0].TotalAmount;
            }
            setErrors(null);
            setDownload(data);
            setTotalExpense({ Name: "Total Expense", Number: totalAmount });
          } else {
            setErrors("No Search found");
          }
        });
    }
  };

  const handleDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(download);
    XLSX.utils.book_append_sheet(wb, ws, "MyExpense");
    XLSX.writeFile(wb, "expense.xlsx");
  };

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
        <Grid item xs={12} sm={6} md={4}>
          {income !== null && <Categori data={income} />}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {netIncome !== null && <Categori data={netIncome} />}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {expense !== null && <Categori data={expense} />}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {data.Number !== NaN && <Categori data={data} />}
        </Grid>

        <Bank />
        <Grid item xs={12} sm={6} md={4}>
          {data2.Number !== NaN && <Categori data={data2} />}
        </Grid>
        <Grid item xs={12}>
          {categori !== null && (
            <FilterForm2
              employee={categori}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              handleSearch={handleSearch}
              handleDownload={handleDownload}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {totalExpense !== null && <Categori data={totalExpense} />}
          {errors !== null && <p style={{ color: "red" }}>{errors}</p>}
        </Grid>
      </Grid>
    </LayoutContiner>
  );
};

export default Dashbord;
