import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {
  BigButtonMake,
  BoxContainer,
  TextFieldMake,
} from "../../styles/MetarialStyles";
import {
  HeadingFormatContainer,
  HeadingFormatSubTitle,
  HeadingFormatTitle,
  PlainText,
} from "../shared/HeadingFormat/HeadingFormatStyle";
import ListMenu from "./ListMenu";
// import ProgressBar from "@ramonak/react-progress-bar";

const ListProject = ({ project, projectCategori, handleProject }) => {
  return (
    <Grid xs={12} md={6} item>
      <HeadingFormatContainer>
        <BoxContainer>
          <HeadingFormatTitle sx={{ p: 0 }}>
            {project.ProjectTitle}
          </HeadingFormatTitle>
          <ListMenu
            id={project.id}
            handleProject={handleProject}
            projectCategori={projectCategori}
          />
        </BoxContainer>
        <HeadingFormatSubTitle>12 open tasks</HeadingFormatSubTitle>
        <Typography variant="body1" sx={{ my: 2 }}>
          {project.Description}
        </Typography>
        <BoxContainer sx={{ alignItems: "end" }}>
          <Box>
            <PlainText>Created : {project.ProjectStart}</PlainText>
            <PlainText variant="body1">
              Team Leader: {project.TeamLeader}
            </PlainText>
            <PlainText variant="body1">Priority: {project.Priority}</PlainText>
            <PlainText variant="body1">
              Deadline: {project.ProjectEnd}
            </PlainText>
            <PlainText variant="body1">Team: {project.TeamMember}</PlainText>
          </Box>

          <Link
            to={`/project/view/${project.id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <BigButtonMake>Project View</BigButtonMake>
          </Link>
        </BoxContainer>
        <Box sx={{ my: 2 }}>
          {/* <ProgressBar completed={180} maxCompleted={200} /> */}
        </Box>
      </HeadingFormatContainer>
    </Grid>
  );
};

export default ListProject;
