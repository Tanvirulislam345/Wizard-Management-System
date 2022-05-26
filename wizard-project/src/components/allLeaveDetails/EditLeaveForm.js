import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const states = [
  {
    value: "Active",
    label: "Active",
  },
  {
    value: "InActive",
    label: "InActive",
  },
];

const EditLeaveForm = ({ data, setData, values, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Employee Id"
          name="EmployeeId"
          defaultValue={values.EmployeeId}
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
          variant="outlined"
          name="LeaveType"
          label="Leave Type"
          defaultValue={values.LeaveType}
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
          name="LeaveFrom"
          label="Leave From"
          type="date"
          defaultValue={values.LeaveFrom}
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
          defaultValue={values.LeaveTo}
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
          variant="outlined"
          label="Status"
          name="Status"
          defaultValue={values.Status}
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
          defaultValue={values.Description}
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

export default EditLeaveForm;
