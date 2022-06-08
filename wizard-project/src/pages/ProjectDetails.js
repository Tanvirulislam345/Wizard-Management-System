import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FinalUpdate from "../components/projects/FinalUpdate";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectPayment from "../components/projects/ProjectPayment";
import Files from "../components/shared/Files/Files";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import SubNav2 from "../components/subNav/SubNav2";
import { BigButtonMake, LayoutContiner } from "../styles/MetarialStyles";
import ClientDetailsPage from "./ClientDetailsPage";

const ProjectDetails = () => {
  const { projectDetailsId } = useParams();
  const { user } = useParams();
  const [clientDetails, setClientDetails] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/project/${projectDetailsId}`)
      .then((res) => setClientDetails(res.data));
  }, [projectDetailsId, status]);

  const handleUpdate = (id, value) => {
    const data = JSON.parse(clientDetails?.Phases);
    data[id].status = value;
    axios
      .put(
        `http://localhost:9000/updateprojectstatus/${projectDetailsId}`,
        data
      )
      .then((res) => {
        setStatus(!status);
      });
  };

  return (
    <LayoutContiner>
      <SubNav2 project="Project Details" />
      {clientDetails !== null && (
        <Grid spacing={2} container>
          <Grid item xs={12} md={7}>
            <HeadingFormat title="Details">
              <ProjectInfo
                clientDetails={clientDetails}
                handleUpdate={handleUpdate}
              />
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
                  <Files files={clientDetails?.File} />
                </HeadingFormat>
              </Grid>

              {user?.Role !== "client" && (
                <Grid item xs={12}>
                  <HeadingFormat title="Final Update">
                    <FinalUpdate />
                  </HeadingFormat>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ProjectPayment projectDetailsId={projectDetailsId} />
          </Grid>
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default ProjectDetails;
