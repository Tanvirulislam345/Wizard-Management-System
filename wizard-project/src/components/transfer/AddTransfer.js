import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonMake,
  LayoutContiner,
  TextFieldMake,
} from "../../styles/MetarialStyles";

const AddTransfer = ({ ChangeNav }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const handleSubmit = () => {
    if (data !== null) {
      const data1 = data.TransferFrom;
      const data2 = data.TransferTo;
      if (data.TransferFrom === data1 && data.TransferFrom === data2) {
        alert(`
    Transfer Error 
    Transfer From and To are same
     `);
      } else {
        axios
          .post(`https://wiztecbd.online/api/transfer_balance`, data)
          .then((res) => {
            if (res.status === 200) {
              alert("Tranfer are successfull");
              ChangeNav("Transfer List");
            }
          });
      }
    } else {
      alert(`please fillup all field`);
    }
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
        <Grid item xs={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            type="text"
            label="Note"
            name="Note"
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

export default AddTransfer;
