import { Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const states = [
  {
    value: "Add payment Type",
    label: "Add payment Type",
  },
  {
    value: "cash",
    label: "Cash",
  },
  {
    value: "card",
    label: "Card",
  },
];
const states2 = [
  {
    value: "Add Status type",
    label: "Add Status type",
  },
  {
    value: "Clear",
    label: "Clear",
  },
  {
    value: "Due",
    label: "Due",
  },
];

const ProjectDetailsForm = ({
  projectDetails,
  data,
  setData,
  handleSubmit,
}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          label="Client Id"
          name="ClientId"
          value={projectDetails.ClientId}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          label="Budget"
          name="Budget"
          value={projectDetails.Budget}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          label="Tax"
          name="Tax"
          value={projectDetails.Tax + " % "}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          label="Discount"
          name="Discount"
          value={projectDetails.Discount + " % "}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          label="Total payable"
          name="TotalPayable"
          value={projectDetails.TotalPayable + "Taka"}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          label="Total Payment"
          name="TotalPayment"
          value={projectDetails.TotalPayment}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          label="Total Due"
          name="Due"
          value={projectDetails.Due}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          focused
          variant="outlined"
          type="date"
          label="Date"
          name="Date"
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
          label="Add new Payment"
          name="NewPayment"
          type="number"
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
          label="Payment Method"
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
          {states.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextFieldMake>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Payment Status"
          name="PaymentStatus"
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
          {states2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextFieldMake>
      </Grid>

      <Grid item xs={12} sx={{ height: "100%", my: "auto" }}>
        <Stack spacing={3} direction="row">
          <ButtonMake size="medium" type="submit" onClick={handleSubmit}>
            Send
          </ButtonMake>
          <ButtonMake size="medium" type="reset">
            Cancel
          </ButtonMake>
        </Stack>
      </Grid>
    </>
  );
};

export default ProjectDetailsForm;
