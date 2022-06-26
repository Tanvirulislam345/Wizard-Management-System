import { Button, Grid } from "@mui/material";
import React from "react";
import { TextFieldMake } from "../../styles/MetarialStyles";

const monthNames = [
  { id: 1, Item: "Cash" },
  { id: 2, Item: "City Bank" },
  { id: 3, Item: "Bank Asia" },
];

const yearName = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

const LoanFilter = ({
  employee,
  filterValue,
  setFilterValue,
  handleSearch,
  handleDownload,
}) => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={4} md={2}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Name"
          name="FullName"
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
            <option key={option.id} value={option.FullName}>
              {option.FullName}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={4} md={2}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Method"
          name="PaymentMethod"
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
          <option>Enter Method</option>
          {monthNames.map((option) => (
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

export default LoanFilter;
