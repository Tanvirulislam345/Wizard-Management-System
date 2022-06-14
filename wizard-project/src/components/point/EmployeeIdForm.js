import { Grid } from "@mui/material";
import React from "react";
import { TextFieldMake } from "../../styles/MetarialStyles";

const EmployeeIdForm = ({ employee, setId }) => {
  return (
    <Grid item xs={12} md={6}>
      <TextFieldMake
        fullWidth
        variant="outlined"
        label="Employee Name"
        name="EmployeeId"
        onChange={(event) => setId(event.target.value)}
        required
        select
        SelectProps={{ native: true }}
      >
        <option>Enter ProjectId</option>
        {employee.map((emp) => (
          <option key={emp.EmployeeId} value={emp.EmployeeId}>
            {emp.FullName}
          </option>
        ))}
      </TextFieldMake>
    </Grid>
  );
};

export default EmployeeIdForm;
