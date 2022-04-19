import { Stack, Typography } from "@mui/material";
import React from "react";

const ProfileNav = ({ navValue, data, setData }) => {
  return (
    <Stack direction="row" spacing={2}>
      {navValue?.map((value, index) => (
        <Typography
          key={index}
          variant="body1"
          onClick={() => setData(value)}
          sx={{
            color: data === value && "#3F51B5",
            borderBottom: data === value && "1px solid #3F51B5",
            fontWeight: "bold",
            px: 2,
          }}
        >
          {value}
        </Typography>
      ))}
    </Stack>
  );
};

export default ProfileNav;
