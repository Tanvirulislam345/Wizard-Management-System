import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const AddClientForm = ({ gender, payment, data, setData, handleSubmit }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          name="FullName"
          label="Full Name"
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
          name="CompanyName"
          label="Company Name"
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
          label="Gender"
          name="Gender"
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
          {gender.map((option, index) => (
            <option key={index} value={option.gender}>
              {option.gender}
            </option>
          ))}
        </TextFieldMake>
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
          label="Billing Method"
          name="BillingMethod"
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
          {payment.map((option, index) => (
            <option key={index} value={option.method}>
              {option.method}
            </option>
          ))}
        </TextFieldMake>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextFieldMake
          fullWidth
          variant="outlined"
          label="Address"
          name="Address"
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
          label="Email"
          name="Email"
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
          type="tel"
          variant="outlined"
          label="Contact"
          name="Contact"
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
          rows={8}
          variant="outlined"
          label="Description"
          name="Description"
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
          type="file"
          focused
          variant="outlined"
          label="Files"
          name="File"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.files[0],
            })
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={3} direction="row">
          <ButtonMake size="medium" type="submit" onClick={handleSubmit}>
            Upload
          </ButtonMake>
          <ButtonMake size="medium" type="reset">
            Cancel
          </ButtonMake>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AddClientForm;
