import { Grid, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonMake,
  LayoutContiner,
  TextFieldMake,
} from "../../styles/MetarialStyles";

const AddMenualAttendence = () => {
  const navigate = useNavigate();
  const [inputList, setInputList] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:9000/employee").then((res) => {
      const data = res.data;
      const value = data.map((da) => {
        return {
          Name: da.FullName,
          EmployeeId: da.EmployeeId,
          InTime: 0,
          OutTime: 0,
        };
      });

      setInputList(value);
    });
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleSubmit = () => {
    const data = inputList.map((value) => {
      if (parseFloat(value.InTime) === 0) {
        return { ...value, Status: "absent" };
      } else if (parseFloat(value.InTime) > 10.15) {
        return { ...value, Status: "late" };
      } else {
        return { ...value, Status: "present" };
      }
    });

    axios.post("http://localhost:9000/addattendence", data).then((res) => {
      if (res.status === 200) {
        navigate("/attendence");
      }
    });
  };
  return (
    <LayoutContiner>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {inputList !== null &&
            inputList?.map((x, i) => {
              return (
                <Grid container spacing={3} key={i}>
                  <Grid item xs={6} md={3}>
                    <TextFieldMake
                      fullWidth
                      focused
                      variant="outlined"
                      label="EmployeeId"
                      name="EmployeeId"
                      value={x.EmployeeId}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextFieldMake
                      fullWidth
                      focused
                      variant="outlined"
                      label="Name"
                      name="Name"
                      value={x.Name}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextFieldMake
                      fullWidth
                      variant="outlined"
                      type="number"
                      label="InTime"
                      name="InTime"
                      value={x.InTime}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <TextFieldMake
                      fullWidth
                      type="number"
                      variant="outlined"
                      label="OutTime"
                      name="OutTime"
                      value={x.OutTime}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Grid>
                </Grid>
              );
            })}
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

export default AddMenualAttendence;
