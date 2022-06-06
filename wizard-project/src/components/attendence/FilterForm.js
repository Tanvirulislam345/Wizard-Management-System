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

const FilterForm = ({
  employee,
  filterValue,
  setFilterValue,
  handleSearch,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={2}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Id"
          name="EmployeeId"
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
            <option key={option.id} value={option.EmployeeId}>
              {option.FullName}
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
      <Grid item xs={4} md={2} sx={{ my: "auto" }}>
        <Button variant="outlined" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterForm;
