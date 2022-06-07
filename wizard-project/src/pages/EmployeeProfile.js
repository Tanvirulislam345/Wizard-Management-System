import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeAbout from "../components/employee/EmployeeAbout";
import Skill from "../components/employee/Skill";
import Files from "../components/shared/Files/Files";
import HeadingFormat from "../components/shared/HeadingFormat/HeadingFormat";
import { HeadingFormatContainer } from "../components/shared/HeadingFormat/HeadingFormatStyle";
import ProfileHead from "../components/shared/ProfileHead/ProfileHead";
import ProfileNav from "../components/shared/ProfileNav/ProfileNav";
import ProfileSetting from "../components/shared/ProfileSetting/ProfileSetting";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";
import Leave from "./Leave/Leave";
import Attendence from "./Attendence";
import EmployeeSlaray from "../components/employee/EmployeeSlaray";
import { useAuth } from "../Context/ContextProvieder";
import Attendences from "../components/attendence/Attendences";

const EmployeeProfile = () => {
  const { profileId } = useParams();
  const { user } = useAuth();
  const [values, setValues] = useState(null);
  const [attendence, setAttendence] = useState(null);
  const [data, setData] = useState("About Me");
  const navValue = ["About Me", "Salary", "Attendence", "Leave", "security"];

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
    axios
      .get(`http://localhost:9000/employee/${profileId}`)
      .then((res) => setValues(res.data[0]));

    axios
      .post(`http://localhost:9000/allattendence/search`, data2)
      .then((res) => setAttendence(res.data));
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
                  description={values.AboutMe}
                  contact={values.Email}
                />
              </Grid>

              <Grid xs={12} item>
                <HeadingFormat title="Skills">
                  <Skill skills={values.Skills} />
                </HeadingFormat>
              </Grid>
              <Grid xs={12} item>
                <HeadingFormat title="Files">
                  <Files files={files} />
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
          </Grid>
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default EmployeeProfile;
