import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeAbout from "../components/employee/EmployeeAbout";
import Skill from "../components/employee/Skill";
import Files from "../components/shared/Files/Files";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import {
  HeadingFormatContainer,
  HeadingFormatTitle,
} from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileHead from "../components/shared/ProfileHead/ProfileHead";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import ProfileSetting from "../components/shared/ProfileSetting/ProfileSetting";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import Leave from "./Leave/Leave";
import EmployeeSlaray from "../components/employee/EmployeeSlaray";
import Attendences from "../components/attendence/Attendences";
import SingleProjectItem from "../components/projects/SingleProjectItem";
import PointsView from "../components/point/PointsView";

const EmployeeProfile = () => {
  const { profileId } = useParams();
  const [values, setValues] = useState(null);
  const [projects, setProjects] = useState([]);
  const [attendence, setAttendence] = useState(null);
  const [data, setData] = useState("About Me");
  const [points, setPoint] = useState(0);
  const [projectCategori, setProjectCategori] = useState(null);
  const handleProject = () => {};
  const navValue = [
    "About Me",
    "Salary",
    "Attendence",
    "Leave",
    "Project",
    "Point",
    "security",
  ];

  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = today.getMonth() + 1;
  const Month = monthNames[month];
  const data2 = {
    EmployeeId: "WizEm22jalftq",
    Month,
  };

  useEffect(() => {
    const EmployeeId = {
      EmployeeId: profileId,
    };
    axios

      .get(`https://wiztecbd.online/api/employee/${profileId}`)
      .then((res) => setValues(res.data[0]));

    axios
      .post(`https://wiztecbd.online/api/allattendence/search`, data2)
      .then((res) => setAttendence(res.data));

    axios
      .get(`https://wiztecbd.online/api/employeeproject/${profileId}`)
      .then((res) => setProjects(res.data));

    axios
      .post(`https://wiztecbd.online/api/points/view`, EmployeeId)
      .then((res) => {
        const data = res.data;
        const point =
          data?.reduce((previous, present) => {
            return previous.TotalPoint + present.TotalPoint;
          }) || 0;
        setPoint(point);
      });
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
                  file={values.File}
                  id={values.EmployeeId}
                  description={values.AboutMe}
                  contact={values.Email}
                  points={points}
                />
              </Grid>

              <Grid xs={12} item>
                <HeadingFormat title="Skills">
                  <Skill skills={values.Skills} />
                </HeadingFormat>
              </Grid>
              <Grid xs={12} item>
                <HeadingFormat title="Files">
                  <Files files={values?.File} />
                </HeadingFormat>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} md={7} lg={8} item>
            <HeadingFormatContainer>
              <ProfileNav navValue={navValue} data={data} setData={setData} />
              {data === "About Me" && <EmployeeAbout values={values} />}
              {data === "Salary" && attendence !== null && (
                <EmployeeSlaray values={values} />
              )}
              {data === "Leave" && <Leave />}
              {data === "Attendence" && (
                <LayoutContiner>
                  <Attendences />
                </LayoutContiner>
              )}
              {data === "security" && <ProfileSetting />}
            </HeadingFormatContainer>

            {data === "Project" && projects?.length > 0 && (
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
            {data === "Point" && (
              <Grid xs={12} item sx={{ mt: 2 }}>
                <PointsView />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default EmployeeProfile;
