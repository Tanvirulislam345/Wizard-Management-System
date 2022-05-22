import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const DynamicAddInput = ({ inputList, setInputList }) => {
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    list[index]["id"] = index + 1;
    list[index]["status"] = "Pendding";
    setInputList(list);
    console.log(inputList);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { phaseStart: "", phaseEnd: "" }]);
  };
  return (
    <Grid item xs={12}>
      {inputList.map((x, i) => {
        return (
          <Grid container spacing={3} key={x.id}>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                height: "100%",
                my: "auto",
              }}
            >
              <Typography variant="5" color="#A4A6B3">
                Phases {i + 1}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextFieldMake
                fullWidth
                focused
                variant="outlined"
                type="date"
                label="Phase Start Date"
                name="phaseStart"
                value={x.phaseStart}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextFieldMake
                fullWidth
                focused
                variant="outlined"
                type="date"
                label="Phase End Date"
                name="phaseEnd"
                value={x.phaseEnd}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextFieldMake
                fullWidth
                variant="outlined"
                type="number"
                label="Work persentize"
                name="workPersent"
                value={x.workPersent}
                onChange={(e) => handleInputChange(e, i)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                height: "100%",
                my: "auto",
              }}
            >
              <Stack spacing={3} direction="row">
                {inputList.length !== 1 && (
                  <ButtonMake size="small" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </ButtonMake>
                )}
                {inputList.length - 1 === i && (
                  <ButtonMake size="small" onClick={handleAddClick}>
                    Add
                  </ButtonMake>
                )}
              </Stack>
            </Grid>
            {/* <input
            name="firstName"
            placeholder="Enter First Name"
            value={x.firstName}
            onChange={(e) => handleInputChange(e, i)}
          />
          <input
            className="ml10"
            name="lastName"
            placeholder="Enter Last Name"
            value={x.lastName}
            onChange={(e) => handleInputChange(e, i)}
          /> */}
            {/* <div className="btn-box">
            {inputList.length !== 1 && (
              <button className="mr10" onClick={() => handleRemoveClick(i)}>
                Remove
              </button>
            )}
            {inputList.length - 1 === i && (
              <button onClick={handleAddClick}>Add</button>
            )}
          </div> */}
          </Grid>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </Grid>
  );
};

export default DynamicAddInput;
