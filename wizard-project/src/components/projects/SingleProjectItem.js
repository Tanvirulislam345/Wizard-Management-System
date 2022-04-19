import React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { BigButtonMake, BoxContainer } from "../../styles/MetarialStyles";
import {
  HeadingFormatContainer,
  HeadingFormatSubTitle,
  HeadingFormatTitle,
  PlainText,
  PlainTextContainer,
} from "../shared/HeadingFormat/HeadingFormatStyle";
import ListMenu from "./ListMenu";
import { Line } from "rc-progress";

const SingleProjectItem = ({ project, projectCategori, handleProject }) => {
  return (
    <HeadingFormatContainer>
      <BoxContainer>
        <HeadingFormatTitle sx={{ p: 0 }}>
          {project.ProjectTitle}
        </HeadingFormatTitle>
        {projectCategori !== null && (
          <ListMenu
            id={project.id}
            handleProject={handleProject}
            projectCategori={projectCategori}
          />
        )}
      </BoxContainer>
      <HeadingFormatSubTitle>12 open tasks</HeadingFormatSubTitle>
      <Typography variant="body1" sx={{ my: 2 }}>
        {project.Description}
      </Typography>

      <Box>
        <PlainTextContainer>
          <PlainText>Client Id</PlainText>
          <PlainText>{project.ClientId}</PlainText>
        </PlainTextContainer>

        <PlainTextContainer>
          <PlainText>Created </PlainText>
          <PlainText>{project.ProjectStart}</PlainText>
        </PlainTextContainer>

        <PlainTextContainer>
          <PlainText>Team Leader</PlainText>
          <PlainText>{project.TeamLeader}</PlainText>
        </PlainTextContainer>

        <PlainTextContainer>
          <PlainText>Team</PlainText>
          <PlainText>{project.TeamMember}</PlainText>
        </PlainTextContainer>

        <HeadingFormatTitle sx={{ mt: 2, p: 0 }}>progress</HeadingFormatTitle>
        <Box sx={{ width: { xs: "100%", md: "70%", lg: "60%" }, my: 2 }}>
          <Line percent="70" strokeColor="#3F51B5" />
        </Box>
      </Box>
      <BoxContainer>
        <Box></Box>
        <Link
          to={`/project/view/${project.id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <BigButtonMake>Project View</BigButtonMake>
        </Link>
      </BoxContainer>
    </HeadingFormatContainer>
  );
};

export default SingleProjectItem;
