import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import {
  ButtonMake,
  LayoutContiner,
  TextFieldMake,
} from "../styles/MetarialStyles";

const BalanceTranfer = () => {
  const [data, setData] = useState(null);
  const handleSubmit = () => {
    console.log(data);
    axios.post(`http://localhost:9000/transfer_balance`, data).then((res) => {
      if (res.status === 200) {
        // navigate("/project");
      }
    });
  };

  return (
    <LayoutContiner>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextFieldMake
            fullWidth
            focused
            variant="outlined"
            label="Transfer From"
            name="TransferFrom"
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
            <option>Transfer From</option>
            <option value="Cash">Cash</option>
            <option value="City Bank">City Bank</option>
            <option value="Bank Asia">Bank Asia</option>
          </TextFieldMake>
        </Grid>
        <Grid item xs={6}>
          <TextFieldMake
            fullWidth
            focused
            variant="outlined"
            label="Transfer To"
            name="TransferTo"
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
            <option>Transfer To</option>
            <option value="Cash">Cash</option>
            <option value="City Bank">City Bank</option>
            <option value="Bank Asia">Bank Asia</option>
          </TextFieldMake>
        </Grid>
        <Grid item xs={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            focused
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
        <Grid item xs={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            type="number"
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
    </LayoutContiner>
  );
};

export default BalanceTranfer;
