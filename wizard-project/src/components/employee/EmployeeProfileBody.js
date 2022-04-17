import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AboutMe from "./AboutMe";
import EmployeeSetting from "./EmployeeSetting";

const EmployeeProfileBody = () => {
  const [data, setData] = useState("About Me");
  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <Box sx={{ backgroundColor: "#262E41", borderRadius: 2, p: 3 }}>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="body1"
              onClick={() => setData("About Me")}
              sx={{
                color: data === "About Me" ? "#3F51B5" : "secondary.main",
                borderBottom: data === "About Me" && "1px solid #3F51B5",
                fontWeight: "bold",
                px: 2,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              onClick={() => setData("security")}
              sx={{
                color: data === "security" ? "#3F51B5" : "secondary.main",
                borderBottom: data === "security" && "1px solid #3F51B5",
                fontWeight: "bold",
                px: 2,
                mx: 3,
              }}
            >
              Inactive
            </Typography>
          </Stack>
          {data === "About Me" && <AboutMe />}
          {data === "security" && <EmployeeSetting />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default EmployeeProfileBody;
