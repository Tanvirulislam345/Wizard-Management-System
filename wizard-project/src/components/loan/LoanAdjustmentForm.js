import { Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";
const states = [
  {
    value: "Cash",
  },
  {
    value: "City Bank",
  },
  {
    value: "Bank Asia",
  },
];
const LoanAdjustmentForm = ({ employee, data, setData, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Employee Name"
          name="FullName"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
          required
          select
          SelectProps={{ native: true }}
        >
          <option>Enter Employee Name</option>
          {employee.map((emp) => (
            <option key={emp.EmployeeId} value={emp.FullName}>
              {emp.FullName}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="PaymentMethod"
          name="PaymentMethod"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
          required
          select
          SelectProps={{ native: true }}
        >
          <option>Enter Payment Method</option>
          {states.map((emp, index) => (
            <option key={index} value={emp.value}>
              {emp.value}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          focused
          type="number"
          variant="outlined"
          label="Amount"
          name="Amount"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          focused
          multiline
          rows={5}
          variant="outlined"
          label="Discription"
          name="Discription"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
        />
      </Grid>

      <Grid item xs={12} sx={{ height: "100%", my: "auto" }}>
        <Stack spacing={3} direction="row">
          <ButtonMake size="medium" type="submit" onClick={handleSubmit}>
            Submit
          </ButtonMake>
          <ButtonMake size="medium" type="reset">
            Cancel
          </ButtonMake>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoanAdjustmentForm;
