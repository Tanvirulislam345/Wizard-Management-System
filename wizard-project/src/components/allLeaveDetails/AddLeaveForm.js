import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const AddLeaveForm = ({
  data,
  setData,
  employee,
  leaveTypes,
  handleSubmit,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Employee Id"
          name="EmployeeId"
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
          <option>Employee Id</option>
          {employee.map((option) => (
            <option key={option.id} value={option.EmployeeId}>
              {option.EmployeeId}
            </option>
          ))}
        </TextFieldMake>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          name="LeaveType"
          label="Leave Type"
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
          {" "}
          <option>Leave Name</option>
          {leaveTypes.map((option) => (
            <option key={option.id} value={option.LeaveName}>
              {option.LeaveName}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          name="LeaveFrom"
          label="Leave From"
          type="date"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          name="LeaveTo"
          label="Leave To"
          type="date"
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
          multiline
          rows={4}
          variant="outlined"
          name="Description"
          label="Driscription"
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

export default AddLeaveForm;
