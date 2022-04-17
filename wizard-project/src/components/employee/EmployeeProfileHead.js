import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import employeeImg from "../../assets/avater1.png";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { BoxContainer, BoxContainerColoum } from "../../styles/MetarialStyles";

const EmployeeProfileHead = () => {
  const [data, setData] = useState("About");
  return (
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <Box sx={{ backgroundColor: "#262E41", borderRadius: 2, p: 3 }}>
          <BoxContainerColoum>
            <Typography variant="h5" sx={{ color: "secondary.main" }}>
              Tanvir
            </Typography>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              M.K anwar
            </Typography>
            <Avatar
              src={employeeImg}
              alt=""
              sx={{ height: "130px", width: "130px", my: 2 }}
            />

            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              E.ID MDX 001
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                my: 2,
                textAlign: "justify",
                overflow: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
              netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
            </Typography>
            <Typography variant="h6" sx={{ color: "secondary.main" }}>
              +44 67363767
            </Typography>
          </BoxContainerColoum>
          <BoxContainer sx={{ width: "70%", m: "auto", mt: 2 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: "secondary.main", fontWeight: "bold" }}
              >
                557
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "secondary.main", fontWeight: "bold" }}
              >
                Follower
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: "secondary.main", fontWeight: "bold" }}
              >
                735
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "secondary.main", fontWeight: "bold" }}
              >
                Following
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "secondary.main",
                  fontWeight: "bold",
                }}
              >
                57
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "secondary.main", fontWeight: "bold" }}
              >
                Post
              </Typography>
            </Box>
          </BoxContainer>
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Box sx={{ backgroundColor: "#262E41", borderRadius: 2, p: 3 }}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body1"
                onClick={() => setData("About")}
                sx={{
                  color: data === "About" ? "#3F51B5" : "secondary.main",
                  borderBottom: data === "About" && "1px solid #3F51B5",
                  fontWeight: "bold",
                  px: 2,
                }}
              >
                About
              </Typography>
              <Typography
                variant="body1"
                onClick={() => setData("Skill")}
                sx={{
                  color: data === "Skill" ? "#3F51B5" : "secondary.main",
                  borderBottom: data === "Skill" && "1px solid #3F51B5",
                  fontWeight: "bold",
                  px: 2,
                  mx: 3,
                }}
              >
                Skill
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.main",
                my: 2,
                textAlign: "justify",
                overflow: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna,
              netus lacus arcu duis mus ut dolor eu. Arcu ipsum facilisis sit
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Box sx={{ backgroundColor: "#262E41", borderRadius: 2, p: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "secondary.main", fontWeight: "bold", mb: 2 }}
          >
            Project Files
          </Typography>
          <Stack spacing={2} direction="row" sx={{ color: "#fff" }}>
            <FileCopyIcon />
            <Typography sx={{ ml: 1 }} variant="body1">
              Project Documents.pdf
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EmployeeProfileHead;
