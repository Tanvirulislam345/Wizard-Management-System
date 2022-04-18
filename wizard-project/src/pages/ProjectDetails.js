import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ClientDetails from "../components/projects/ClientDetails";
import ProjectInfo from "../components/projects/ProjectInfo";
import Files from "../components/shared/Files/Files";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const ProjectDetails = () => {
  const { projectDetailsId } = useParams();
  console.log(projectDetailsId);

  const clientDetails = {
    name: "Client",
    date: "Jan 21, 2022",
    ContactPerson: "low",
  };
  const keys = Object.keys(clientDetails);

  const files = useState([1, 2, 3]);

  return (
    <LayoutContiner>
      <SubNav2 project="Project Details" />
      <Grid spacing={2} container>
        <Grid item xs={12} sm={5} md={5}>
          <Grid spacing={2} container>
            <Grid item xs={12}>
              <HeadingFormat title="Client Details">
                <ClientDetails keys={keys} clientDetails={clientDetails} />
              </HeadingFormat>
            </Grid>
            <Grid item xs={12}>
              <HeadingFormat title="Files">
                <Files files={files} />
              </HeadingFormat>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7} md={7}>
          <HeadingFormat title="Details">
            <ProjectInfo keys={keys} clientDetails={clientDetails} />
          </HeadingFormat>
        </Grid>
      </Grid>
    </LayoutContiner>
  );
};

export default ProjectDetails;
