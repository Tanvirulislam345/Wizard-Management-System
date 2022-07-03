import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ButtonMake,
  LayoutContiner,
  TextFieldMake,
} from "../../styles/MetarialStyles";

const CategoriEditForm = () => {
  const navigate = useNavigate();
  const { expenseId } = useParams();
  const [data, setData] = useState(null);
  const [value, setValue] = useState(null);

  useState(() => {
    axios
      .get(`http://localhost:9000/expense_categori/${expenseId}`, data)
      .then((res) => {
        setValue(res.data);
      });
  }, [expenseId]);

  const handleSubmit = () => {
    axios
      .put(`http://localhost:9000/expense_categori/${expenseId}`, data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/expense");
        }
      });
  };

  return (
    <LayoutContiner>
      {value !== null && (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextFieldMake
                fullWidth
                variant="outlined"
                name="Item"
                label="Item"
                defaultValue={value.Item}
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
        </>
      )}
    </LayoutContiner>
  );
};

export default CategoriEditForm;
