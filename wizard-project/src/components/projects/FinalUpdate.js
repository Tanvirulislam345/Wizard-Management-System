import { Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const FinalUpdate = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          type="file"
          focused
          variant="outlined"
          label="File"
          name="File"
          multiple
          //   onChange={(event) =>
          //     setData({
          //       ...data,
          //       [event.target.name]: event.target.files[0],
          //     })
          //   }
        />
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={3} direction="row">
          <ButtonMake size="medium" style={{ background: "#1A202E" }}>
            Upload
          </ButtonMake>
          <ButtonMake size="medium" style={{ background: "#1A202E" }}>
            Cancel
          </ButtonMake>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FinalUpdate;
