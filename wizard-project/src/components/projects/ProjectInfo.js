import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  HeadingFormatTitle,
  PlainText,
  PlainTextContainer,
  PlainTextContainer2,
} from "../shared/HeadingFormat/HeadingFormatStyle";
import { SinglePlainText2 } from "../shared/ProfileSingleInfo/SingleInfoStyle";
import PhasesListMenu from "./PhasesListMenu";
import ProgressBar from "./ProgressBar";

const ProjectInfo = ({ clientDetails, handleUpdate }) => {
  const {
    ProjectStart,
    ProjectEnd,
    TeamLeader,
    TeamMember,
    Description,
    Phases,
    Budget,
    TotalPayable,
    TotalPayment,
    Due,
    Tax,
    Discount,
  } = clientDetails;

  const allmember = JSON.parse(TeamMember).map((data) => data.name);

  const phases = JSON.parse(Phases);
  const allphases = phases.filter((data) => {
    if (data.status === "Done" || data.status === "Late") {
      return data;
    }
  });
  const initial = 0;

  const PhasesInt = allphases.map((data) => parseInt(data.workPersent));
  const updateWork = PhasesInt.reduce((pre, now) => pre + now, initial);

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
      <PlainTextContainer>
        <PlainText>Budget</PlainText>
        <PlainText>{Budget}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Total Payable</PlainText>
        <PlainText>{TotalPayable}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Total Payment</PlainText>
        <PlainText>{TotalPayment}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Due</PlainText>
        <PlainText>{Due}</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Tax</PlainText>
        <PlainText>{Tax} %</PlainText>
      </PlainTextContainer>
      <PlainTextContainer>
        <PlainText>Discount</PlainText>
        <PlainText>{Discount} %</PlainText>
      </PlainTextContainer>
      <HeadingFormatTitle sx={{ mt: 2, mb: 1, p: 0 }}>
        Phases
      </HeadingFormatTitle>
      {phases.map((data, index) => (
        <PlainTextContainer2 key={data.id}>
          <SinglePlainText2>{data.phaseStart}</SinglePlainText2>
          <SinglePlainText2>{data.phaseEnd}</SinglePlainText2>
          <SinglePlainText2 style={{ width: "50px", textAlign: "center" }}>
            {data.workPersent}%
          </SinglePlainText2>
          <PhasesListMenu
            data={data}
            value={index}
            handleUpdate={handleUpdate}
          />
        </PlainTextContainer2>
      ))}

      <HeadingFormatTitle sx={{ mt: 2, mb: 1, p: 0 }}>
        Progress
      </HeadingFormatTitle>
      <ProgressBar updateWork={updateWork} />
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
