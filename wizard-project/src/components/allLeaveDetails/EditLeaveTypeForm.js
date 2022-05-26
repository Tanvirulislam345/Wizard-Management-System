import { Grid, Stack } from "@mui/material";
import React from "react";
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

const EditLeaveTypeForm = ({ data, setData, values, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          name="LeaveName"
          label="Leave Name"
          defaultValue={values.LeaveName}
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
          variant="outlined"
          name="LeaveTime"
          label="Leave Time"
          type="number"
          defaultValue={values.LeaveTime}
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
          required
          select
          SelectProps={{ native: true }}
        >
          {states.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextFieldMake>
      </Grid>

      <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          name="Description"
          label="Description"
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

export default EditLeaveTypeForm;
