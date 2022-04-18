import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeProfileBody from "../components/employee/EmployeeProfileBody";
import EmployeeProfileHead from "../components/employee/EmployeeProfileHead";
import ProfileHead from "../components/shared/ProfileHead/ProfileHead";
import SubNav2 from "../components/subNav/SubNav2";
import { LayoutContiner } from "../styles/MetarialStyles";

const EmployeeProfile = () => {
  const { profileId } = useParams();
  const [values, setValues] = useState(null);
  console.log(values);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/employee/${profileId}`)
      .then((res) => setValues(res.data[0]));
  }, [profileId]);
  return (
    <LayoutContiner>
      <SubNav2 project="Employee Profile" />
      {values !== null && (
        <Grid container spacing={2}>
          <Grid xs={12} md={5} lg={4} item>
            <ProfileHead
              name={values.FirstName}
              designation={values.Designation}
              id={values.EmployeeId}
              description={values.Description}
              contact={values.Email}
            />
          </Grid>
          <Grid xs={12} md={7} lg={8} item>
            <EmployeeProfileBody />
          </Grid>
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default EmployeeProfile;
