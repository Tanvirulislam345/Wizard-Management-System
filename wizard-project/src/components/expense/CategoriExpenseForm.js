import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonMake,
  LayoutContiner,
  TextFieldMake,
} from "../../styles/MetarialStyles";

const CategoriExpenseForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const handleSubmit = () => {
    console.log(data);
    axios.post(`http://localhost:9000/expensecategori`, data).then((res) => {
      if (res.status === 200) {
        navigate("/expense");
      }
    });
  };
  return (
    <LayoutContiner>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            name="Item"
            label="Item"
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
    </LayoutContiner>
  );
};

export default CategoriExpenseForm;
