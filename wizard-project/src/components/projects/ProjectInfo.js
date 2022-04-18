import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BoxContainer } from "../../styles/MetarialStyles";
import { HeadingFormatTitle } from "../shared/HeadingFormat/HeadingFormatStyle";

const ProjectInfo = ({ clientDetails }) => {
  let keys = Object.keys(clientDetails);
  keys.shift(); //shift used for remove 1st element
  const value = keys.splice(11, 1); //splice used for which index number and how many index

  return (
    <Box>
      {keys?.map((key, index) => (
        <BoxContainer
          key={index}
          style={{ marginBottom: "10px", justifyContent: "start" }}
        >
          <Typography style={{ width: "250px" }}>{key}</Typography>
          <Typography>{clientDetails[key]}</Typography>
        </BoxContainer>
      ))}
      <HeadingFormatTitle sx={{ mt: 2, mb: 1, p: 0 }}>
        {value}
      </HeadingFormatTitle>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {/* {clientDetails[value]} */}
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
