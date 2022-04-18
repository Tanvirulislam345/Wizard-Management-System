import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientDetails from "../components/projects/ClientDetails";
import ProjectInfo from "../components/projects/ProjectInfo";
import Files from "../components/shared/Files/Files";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const ProjectDetails = () => {
  const { projectDetailsId } = useParams();
  const [clientDetails, setClientDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/project/${projectDetailsId}`)
      .then((res) => setClientDetails(res.data[0]));
  }, [projectDetailsId]);

  const files = useState([1, 2, 3]);

  return (
    <LayoutContiner>
      <SubNav2 project="Project Details" />
      {clientDetails !== null && (
        <Grid spacing={2} container>
          <Grid item xs={12} sm={7} md={7}>
            <HeadingFormat title="Details">
              <ProjectInfo clientDetails={clientDetails} />
            </HeadingFormat>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Grid spacing={2} container>
              <Grid item xs={12}>
                <HeadingFormat title="Files">
                  <Files files={files} />
                </HeadingFormat>
              </Grid>
              <Grid item xs={12}>
                <HeadingFormat title="Client Details">
                  <ClientDetails clientDetails={clientDetails} />
                </HeadingFormat>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default ProjectDetails;
