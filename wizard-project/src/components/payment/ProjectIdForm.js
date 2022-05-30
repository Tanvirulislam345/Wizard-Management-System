import { Grid } from "@mui/material";
import React from "react";
import { TextFieldMake } from "../../styles/MetarialStyles";

const ProjectIdForm = ({ ProjectId, setId }) => {
  return (
    <Grid item xs={12} md={6}>
      <TextFieldMake
        fullWidth
        variant="outlined"
        label="Project Id"
        name="ProjectId"
        onChange={(event) => setId(event.target.value)}
        required
        select
        SelectProps={{ native: true }}
      >
        {ProjectId.map((project) => (
          <option key={project.ProjectId} value={project.ProjectId}>
            {project.ProjectId}
          </option>
        ))}
      </TextFieldMake>
    </Grid>
  );
};

export default ProjectIdForm;