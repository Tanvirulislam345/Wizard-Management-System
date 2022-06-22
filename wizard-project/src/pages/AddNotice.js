import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonMake,
  LayoutContiner,
  TextFieldMake,
} from "../styles/MetarialStyles";

const AddNotice = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [email1, setEmail1] = useState(null);
  const [email2, setEmail2] = useState(null);
  const [checked, setChecked] = React.useState([false, false]);
  const [value1, setvalue1] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:9000/employee").then((res) => {
      const data = res.data;
      const value1 = data.map((da) => {
        return da.Email;
      });
      setEmail1(value1);
    });

    axios.get("http://localhost:9000/client").then((res) => {
      const data = res.data;
      const value1 = data.map((da) => {
        return da.Email;
      });
      setEmail2(value1);
    });
    if (checked[1] && checked[0] && email1 !== null && email2 !== null) {
      setvalue1([...email1, ...email2]);
    } else if (checked[0] && email1 !== null) {
      setvalue1([...email1]);
    } else if (!checked[0] && checked[1] && email2 !== null) {
      setvalue1([...email2]);
    } else {
      setvalue1(null);
    }
  }, [checked]);

  const handleChange1 = (e) => {
    setChecked([e.target.checked, checked[1]]);
  };

  const handleChange2 = (e) => {
    setChecked([checked[0], e.target.checked]);
  };

  const handleSubmit = () => {
    const newData = {
      ...data,
      Email2: value1 === null ? "Not Email" : value1,
    };

    axios.post("http://localhost:9000/addnotice", newData).then((res) => {
      navigate("/notice");
    });
  };

  return (
    <LayoutContiner>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Subject"
            name="Subject"
            placeholder="Dear Employee or Client"
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
            focused
            multiline
            rows={8}
            variant="outlined"
            label="Notice"
            name="Notice"
            placeholder="Dear Employee or Client"
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
            label="Email"
            name="Email"
            placeholder="Dear Employee or Client"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <FormControlLabel
              color="#FF5733"
              label="All Employee"
              control={
                <Checkbox checked={checked[0]} onChange={handleChange1} />
              }
            />
            <FormControlLabel
              label="All Client"
              control={
                <Checkbox checked={checked[1]} onChange={handleChange2} />
              }
            />
          </Box>
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
export default AddNotice;
