import { Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const states = [
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
    value: "Clear",
    label: "Clear",
  },
  {
    value: "Pending",
    label: "Pending",
  },
];

const EditExpenseForm = ({ data, setData, handleSubmit, values }) => {
  console.log(values);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          name="Item"
          label="Item"
          defaultValue={values.Item}
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
          name="OrderBy"
          label="Order By"
          defaultValue={values.OrderBy}
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
          name="OrderFrom"
          label="Order From"
          defaultValue={values.OrderFrom}
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
          type="date"
          focused
          variant="outlined"
          name="OrderDate"
          label="Order Date"
          defaultValue={values.OrderDate}
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
          type="number"
          variant="outlined"
          name="TotalAmount"
          label="Total Amount"
          defaultValue={values.TotalAmount}
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
          defaultValue={values.PaymentMethod}
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
          defaultValue={values.PaymentStatus}
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
      <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          name="Description"
          label="Driscription"
          defaultValue={values.Driscription}
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
            Send
          </ButtonMake>
          <ButtonMake size="medium" type="reset">
            Cancel
          </ButtonMake>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default EditExpenseForm;
