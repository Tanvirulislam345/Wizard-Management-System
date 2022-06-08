import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAuth } from "../../Context/ContextProvieder";
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
    Discount,
    Tax,
  } = clientDetails;
  const { user } = useAuth();

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
        <PlainText>{Budget} Taka</PlainText>
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
          {user?.Role === "admin" && (
            <PhasesListMenu
              data={data}
              value={index}
              handleUpdate={handleUpdate}
            />
          )}
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
      </Typography>
    </Box>
  );
};

export default ProjectInfo;
