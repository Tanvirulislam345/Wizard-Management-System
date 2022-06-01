import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";
import image from "../../assets/loginpage.png";

const states = [
  {
    value: "Enter you role",
    label: "Enter you role",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "employee",
    label: "Employee",
  },
  {
    value: "client",
    label: "Client",
  },
];

const LoginForm = ({ data, setData, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          sx={{ fontSize: "44px", fontWeight: "500", color: "white" }}
        >
          Wizard Software & Technology Bangladesh Ltd
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={image} alt="" width="100%" height="100%" />
      </Grid>
      <Grid item xs={12} md={4} sx={{ m: "auto" }}>
        <Grid item xs={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Role"
            name="Role"
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
            variant="outlined"
            name="Email"
            label="Email"
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
            variant="outlined"
            name="Password"
            label="Password"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={3} direction="row" sx={{ mt: 3 }}>
            <ButtonMake size="medium" type="submit" onClick={handleSubmit}>
              Login
            </ButtonMake>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
