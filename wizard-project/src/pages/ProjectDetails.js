import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FinalUpdate from "../components/projects/FinalUpdate";
import ProjectInfo from "../components/projects/ProjectInfo";
import Files from "../components/shared/Files/Files";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import SubNav2 from "../components/subNav/SubNav2";
import { BigButtonMake, LayoutContiner } from "../styles/MetarialStyles";
import ClientDetailsPage from "./ClientDetailsPage";

const ProjectDetails = () => {
  const { projectDetailsId } = useParams();
  const [clientDetails, setClientDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/project/${projectDetailsId}`)
      .then((res) => setClientDetails(res.data));
  }, [projectDetailsId]);

  const handleUpdate = (id, status) => {
    console.log(id, status);
  };

  const files = [1, 3, 4];

  return (
    <LayoutContiner>
      <SubNav2 project="Project Details" />
      {clientDetails !== null && (
        <Grid spacing={2} container>
          <Grid item xs={12} md={7}>
            <HeadingFormat title="Details">
              <ProjectInfo clientDetails={clientDetails} />
            </HeadingFormat>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid spacing={2} container>
              <Grid item xs={12}>
                {clientDetails?.ClientId && (
                  <ClientDetailsPage clientId={clientDetails?.ClientId} />
                )}
              </Grid>
              <Grid item xs={12}>
                <HeadingFormat title="Files">
                  <Files files={files} />
                </HeadingFormat>
              </Grid>
              {/* <Grid item xs={12}>
                <BigButtonMake>
                  <a href={clientDetails.File}>download</a>
                </BigButtonMake>
              </Grid> */}
              <Grid item xs={12}>
                <HeadingFormat title="Final Update">
                  <FinalUpdate />
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
