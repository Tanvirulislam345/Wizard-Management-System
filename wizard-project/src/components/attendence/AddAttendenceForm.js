import { Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";
import { SinglePlainText } from "../shared/ProfileSingleInfo/SingleInfoStyle";

const AddAttendenceForm = ({ handleFile, handleSubmit, excelFileError }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          type="file"
          focused
          variant="outlined"
          label="Attendence file"
          name="profile"
          onChange={handleFile}
        />
      </Grid>
      <Grid item xs={12}>
        <SinglePlainText>{excelFileError}</SinglePlainText>
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={3} direction="row">
          <ButtonMake size="medium" onClick={handleSubmit} sx={{ ml: "auto" }}>
            Upload xls file
          </ButtonMake>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AddAttendenceForm;
