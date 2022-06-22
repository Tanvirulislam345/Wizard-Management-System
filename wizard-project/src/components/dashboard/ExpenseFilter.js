import { Button, Grid } from "@mui/material";
import React from "react";
import { TextFieldMake } from "../../styles/MetarialStyles";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const yearName = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

const ExpenseFilter = ({
  employee,
  filterValue,
  setFilterValue,
  handleSearch,
  handleDownload,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={2}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Item"
          name="Item"
          onChange={(event) =>
            setFilterValue({
              ...filterValue,
              [event.target.name]: event.target.value,
            })
          }
          required
          select
          SelectProps={{ native: true }}
        >
          <option>Name</option>
          {employee?.map((option) => (
            <option key={option.id} value={option.Item}>
              {option.Item}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={4} md={2}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Month"
          name="Month"
          onChange={(event) =>
            setFilterValue({
              ...filterValue,
              [event.target.name]: event.target.value,
            })
          }
          required
          select
          SelectProps={{ native: true }}
        >
          <option>Month</option>
          {monthNames.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={4} md={2}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Year"
          name="Year"
          onChange={(event) =>
            setFilterValue({
              ...filterValue,
              [event.target.name]: event.target.value,
            })
          }
          required
          select
          SelectProps={{ native: true }}
        >
          <option>Year</option>
          {yearName.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid
        item
        xs={4}
        md={2}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Button variant="outlined" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
      <Grid
        item
        xs={4}
        md={2}
        sx={{
          ml: "auto",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Button variant="outlined" onClick={handleDownload}>
          Download
        </Button>
      </Grid>
    </Grid>
  );
};

export default ExpenseFilter;
