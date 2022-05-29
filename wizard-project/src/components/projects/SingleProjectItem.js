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
import ProgressBar from "./ProgressBar";

const SingleProjectItem = ({ project, projectCategori, handleProject }) => {
  const data = JSON.parse(project?.TeamMember);
  const value = data?.map((value) => value.name);

  const phases = JSON.parse(project?.Phases);
  const allphases = phases.filter((data) => {
    if (data.status === "Done" || data.status === "Late") {
      return data;
    }
  });
  const initial = 0;

  const PhasesInt = allphases.map((data) => parseInt(data.workPersent));
  const updateWork = PhasesInt.reduce((pre, now) => pre + now, initial);
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
          <PlainText>End Date </PlainText>
          <PlainText>{project.ProjectEnd}</PlainText>
        </PlainTextContainer>

        <PlainTextContainer>
          <PlainText>Team Leader</PlainText>
          <PlainText>{project.TeamLeader}</PlainText>
        </PlainTextContainer>

        <PlainTextContainer>
          <PlainText>Team Member</PlainText>
          <PlainText>{value.join()}</PlainText>
        </PlainTextContainer>

        <ProgressBar updateWork={updateWork} />
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
