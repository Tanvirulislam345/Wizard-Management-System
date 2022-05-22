import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Line } from "rc-progress";
import React from "react";
import { BigButtonMake } from "../../styles/MetarialStyles";
import {
  HeadingFormatTitle,
  PlainText,
  PlainTextContainer,
  PlainTextContainer2,
} from "../shared/HeadingFormat/HeadingFormatStyle";
import { SinglePlainText2 } from "../shared/ProfileSingleInfo/SingleInfoStyle";
import PhasesListMenu from "./PhasesListMenu";

const ProjectInfo = ({ clientDetails, handleUpdate }) => {
  const {
    ProjectStart,
    ProjectEnd,
    TeamLeader,
    TeamMember,
    Description,
    Phases,
  } = clientDetails;
  const allmember = JSON.parse(TeamMember).map((data) => data.name);
  const phases = JSON.parse(Phases);

  return (
    <Box>
      <PlainTextContainer>
        <PlainText>ProjectStart</PlainText>
        <PlainText>{ProjectStart}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>ProjectEnd</PlainText>
        <PlainText>{ProjectEnd}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>TeamLeader</PlainText>
        <PlainText>{TeamLeader}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>TeamMember</PlainText>
        <PlainText>{allmember.join()}</PlainText>
      </PlainTextContainer>
      <HeadingFormatTitle sx={{ mt: 2, mb: 1, p: 0 }}>
        Phases
      </HeadingFormatTitle>
      {phases.map((data, index) => (
        <PlainTextContainer2 key={data.id}>
          <SinglePlainText2>{data.phaseStart}</SinglePlainText2>
          <SinglePlainText2>{data.phaseEnd}</SinglePlainText2>
          <SinglePlainText2>{data.workPersent}%</SinglePlainText2>
          <PhasesListMenu data={data} handleUpdate={handleUpdate} />
        </PlainTextContainer2>
      ))}

      <HeadingFormatTitle sx={{ mt: 2, mb: 1, p: 0 }}>
        Progress
      </HeadingFormatTitle>
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "80%", md: "70%", lg: "60%" }, mr: 2 }}>
          <Line
            percent="70"
            strokeColor="#3F51B5"
            strokeWidth={3}
            trailWidth={4}
            style={{
              borderRadius: "7px",
            }}
          />
        </Box>
        <Typography variant="h5">{60} %</Typography>
      </Box>
      <HeadingFormatTitle sx={{ mt: 2, mb: 1, p: 0 }}>
        Description
      </HeadingFormatTitle>

      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {Description}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
        interdum ornare lectus lobortis curabitur felis, condimentum arcu dis.
        Porttitor aliquam tellus ut pulvinar quis. Vitae arcu volutpat id est
        tristique consequat. Ligula pretium vel in nunc quis odio vel amet.
        Pellentesque in eget eu sed nisl massa augue ornare eget. Elit eu
        gravida mauris, orci. Sapien laoreet nunc dolor tortor vitae, feugiat.
        Scelerisque adipiscing consequat lectus purus donec feugiat. Turpis leo
        bibendum et accumsan mi. Nulla arcu massa facilisis quisque id sed.
        Tortor auctor cras feugiat sed massa cursus tempus. In tellus sapien
        tincidunt viverra nisi et. Blandit odio ullamcorper maecenas dictum
        iaculis. Neque, feugiat ut venenatis id sed quis eget. Turpis facilisi
        volutpat adipiscing pretium enim montes, suscipit. Purus mauris lobortis
        consectetur congue. Dignissim viverra tincidunt ipsum tellus. Dictum id
        at pulvinar arcu massa dui dolor. Magnis pellentesque nunc non et,
        dictumst tellus eget tincidunt. Enim eget posuere aliquet dictum
        accumsan.
      </Typography>
    </Box>
  );
};

export default ProjectInfo;
