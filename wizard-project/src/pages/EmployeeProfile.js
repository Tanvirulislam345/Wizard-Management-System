import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeAbout from "../components/employee/EmployeeAbout";
import Files from "../components/shared/Files/Files";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileHead from "../components/shared/ProfileHead/ProfileHead";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import ProfileSetting from "../components/shared/ProfileSetting/ProfileSetting";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EmployeeProfile = () => {
  const { profileId } = useParams();
  const [values, setValues] = useState(null);
  const [data, setData] = useState("About Me");
  const [data2, setData2] = useState("About");
  const navValue = ["About Me", "security"];
  const navValue2 = ["About", "Skill"];

  useEffect(() => {
    axios
      .get(`http://localhost:9000/employee/${profileId}`)
      .then((res) => setValues(res.data[0]));
  }, [profileId]);

  const files = useState([1, 2, 3]);

  return (
    <LayoutContiner>
      <SubNav2 project="Employee Profile" />

      {values !== null && (
        <Grid container spacing={2}>
          <Grid xs={12} md={5} lg={4} item>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <ProfileHead
                  name={values.FullName}
                  designation={values.Designation}
                  id={values.EmployeeId}
                  description={values.Description}
                  contact={values.Email}
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
              {data === "About Me" && <EmployeeAbout values={values} />}
              {data === "security" && <ProfileSetting />}
            </HeadingFormatContainer>
          </Grid>
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default EmployeeProfile;
