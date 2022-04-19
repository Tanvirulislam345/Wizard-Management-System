import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  HeadingFormatContainer,
  HeadingFormatTitle,
} from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileHead from "../components/shared/ProfileHead/ProfileHead";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import SubNav2 from "../components/subNav/SubNav2";
import ProfileSetting from "../components/shared/ProfileSetting/ProfileSetting";
import { LayoutContiner } from "../styles/MetarialStyles";
import ClientAbout from "../components/clients/ClientAbout";
import SingleProjectItem from "../components/projects/SingleProjectItem";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import Files from "../components/shared/Files/Files";

const ClientProfile = () => {
  const { clientId } = useParams();
  const [values, setValues] = useState(null);
  console.log(values);
  const [data, setData] = useState("About Me");
  const [data2, setData2] = useState("About");
  const navValue = ["About Me", "security"];
  const navValue2 = ["About", "Skill"];

  const [projects, setProjects] = useState([]);
  const [projectCategori, setProjectCategori] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/client/${clientId}`)
      .then((res) => setValues(res.data[0]));

    fetch(`http://localhost:9000/allproject`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [clientId]);

  const files = useState([1, 2, 3]);

  // useEffect(() => {
  //   fetch(`http://localhost:9000/allproject`)
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);

  const handleProject = () => {};

  return (
    <LayoutContiner>
      <SubNav2 project="Client Profile" />
      {values !== null && (
        <>
          <Grid container spacing={2}>
            <Grid xs={12} md={5} lg={4} item>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <ProfileHead
                    name={values.FullName}
                    designation={values.CompanyName}
                    id={values.ClientId}
                    description={values.Description}
                    contact={values.Contact}
                  />
                </Grid>

                <Grid xs={12} item>
                  <HeadingFormat title="Files">
                    <Files files={files} />
                  </HeadingFormat>
                </Grid>

                <Grid xs={12} item>
                  <HeadingFormatContainer>
                    <ProfileNav
                      navValue={navValue2}
                      data={data2}
                      setData={setData2}
                    />
                  </HeadingFormatContainer>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} md={7} lg={8} item>
              <HeadingFormatContainer>
                <ProfileNav navValue={navValue} data={data} setData={setData} />
                {data === "About Me" && <ClientAbout values={values} />}
                {data === "security" && <ProfileSetting />}
              </HeadingFormatContainer>

              {data === "About Me" && (
                <>
                  <HeadingFormatTitle sx={{ mt: 3, px: 1 }}>
                    Project
                  </HeadingFormatTitle>
                  <Grid container spacing={2}>
                    {projects?.map((project, index) => (
                      <Grid xs={12} item key={index}>
                        <SingleProjectItem
                          project={project}
                          projectCategori={projectCategori}
                          handleProject={handleProject}
                        ></SingleProjectItem>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </LayoutContiner>
  );
};

export default ClientProfile;
