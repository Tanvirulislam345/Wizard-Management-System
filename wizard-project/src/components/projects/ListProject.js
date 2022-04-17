import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BoxContainer, TextFieldMake } from "../../styles/MetarialStyles";
import ListMenu from "./ListMenu";
// import ProgressBar from "@ramonak/react-progress-bar";

const ListProject = ({ project, deleteProject }) => {
  return (
    <Grid xs={12} md={6} item>
      <Box
        sx={{
          backgroundColor: "#262E41",
          borderRadius: 2,
          p: 3,
          // textAlign: "left",
        }}
      >
        <BoxContainer>
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            {project.ProjectTitle}
          </Typography>
          <ListMenu id={project.id} deleteProject={deleteProject}></ListMenu>
        </BoxContainer>
        <Typography variant="subtitle2" sx={{ color: "secondary.main" }}>
          12 open tasks
        </Typography>
        <Typography variant="body1" sx={{ color: "secondary.main", my: 2 }}>
          {project.Description}
        </Typography>
        <BoxContainer>
          <Box sx={{ color: "secondary.main", mb: 1 }}>
            <Typography variant="body1">{project.ProjectStart}</Typography>
            <Typography variant="body1">
              Team Leader: {project.TeamLeader}
            </Typography>
            <Typography variant="body1">
              Priority: {project.Priority}
            </Typography>
            <Typography variant="body1">
              Deadline: {project.ProjectEnd}
            </Typography>
            <Typography variant="body1">Team: {project.TeamMember}</Typography>
          </Box>

          <Box>
            <Typography variant="body1" sx={{ color: "secondary.main", mb: 1 }}>
              Category
            </Typography>
            <Button variant="contained" color="info">
              Website
            </Button>
          </Box>
        </BoxContainer>
        <Box sx={{ my: 2 }}>
          {/* <ProgressBar completed={180} maxCompleted={200} /> */}
        </Box>
      </Box>
    </Grid>
  );
};

export default ListProject;
