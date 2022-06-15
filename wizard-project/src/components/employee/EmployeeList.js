import { Avatar, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  BigButtonMake,
  BoxContainer,
  BoxContainerColoum,
} from "../../styles/MetarialStyles";
import profile from "../../assets/avater1.png";
import { Box } from "@mui/system";
import ListMenuEmployee from "./ListMenuEmployee";
import { Link } from "react-router-dom";
import {
  HeadingFormatContainer,
  HeadingFormatSubTitle,
  HeadingFormatTitle,
} from "../shared/HeadingFormat/HeadingFormatStyle";

const EmployeeList = ({ employee, handleRemove }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
      <HeadingFormatContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BoxContainerColoum>
              <Avatar src={profile} sx={{ width: "130px", height: "130px" }} />
              <HeadingFormatSubTitle sx={{ py: 2 }}>
                {employee.EmployeeId}
              </HeadingFormatSubTitle>
            </BoxContainerColoum>
          </Grid>
          <Grid xs={12} md={8} item>
            <BoxContainer>
              <HeadingFormatTitle sx={{ p: 0 }}>
                {employee.FullName}
              </HeadingFormatTitle>
              <ListMenuEmployee
                id={employee.EmployeeId}
                handleRemove={handleRemove}
              ></ListMenuEmployee>
            </BoxContainer>
            <HeadingFormatSubTitle>
              {employee.Designation}
            </HeadingFormatSubTitle>
            <Typography
              variant="body1"
              sx={{ color: "secondary.main", my: 2, textAlign: "justify" }}
            >
              {employee.AboutMe}
            </Typography>
            <Stack spacing={3} direction="row">
              <BigButtonMake>Add Task</BigButtonMake>
              <Link
                to={`/employee/profile/${employee.EmployeeId}`}
                style={{ textDecoration: "none" }}
              >
                <BigButtonMake>Profile</BigButtonMake>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </HeadingFormatContainer>
    </Grid>
  );
};

export default EmployeeList;
