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

const EmployeeList = ({ employee, handleRemove }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
      <Box
        sx={{
          backgroundColor: "#262E41",
          borderRadius: 2,
          p: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BoxContainerColoum>
              <Avatar src={profile} sx={{ width: "130px", height: "130px" }} />
              <Typography
                variant="h6"
                sx={{
                  color: "secondary.main",
                  mt: 2,
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {employee.EmployeeId}
              </Typography>
            </BoxContainerColoum>
          </Grid>
          <Grid xs={12} md={8} item>
            <BoxContainer>
              <Typography variant="h5" sx={{ color: "secondary.main" }}>
                {employee.FirstName}
              </Typography>
              <ListMenuEmployee
                id={employee.id}
                handleRemove={handleRemove}
              ></ListMenuEmployee>
            </BoxContainer>
            <Typography variant="subtitle2" sx={{ color: "secondary.main" }}>
              {employee.Designation}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "secondary.main", my: 2, textAlign: "justify" }}
            >
              {employee.Description}
            </Typography>
            <Stack spacing={3} direction="row">
              <BigButtonMake>Add Task</BigButtonMake>
              <Link
                to={`/employee/profile/${employee.id}`}
                style={{ textDecoration: "none" }}
              >
                <BigButtonMake>Profile</BigButtonMake>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default EmployeeList;
