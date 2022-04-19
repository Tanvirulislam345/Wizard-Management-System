import { Grid } from "@mui/material";
import React from "react";
import SingleProjectItem from "./SingleProjectItem";

const ListProject = ({ project, projectCategori, handleProject }) => {
  return (
    <Grid xs={12} md={6} item>
      <SingleProjectItem
        project={project}
        projectCategori={projectCategori}
        handleProject={handleProject}
      />
    </Grid>
  );
};

export default ListProject;
