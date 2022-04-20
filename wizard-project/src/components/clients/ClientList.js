import { Avatar, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  BigButtonMake,
  BoxContainer,
  BoxContainerColoum,
} from "../../styles/MetarialStyles";
import profile from "../../assets/avater1.png";
import ListMenuClient from "./ListMenuClient";
import { Link } from "react-router-dom";
import {
  HeadingFormatContainer,
  HeadingFormatSubTitle,
  HeadingFormatTitle,
} from "../shared/HeadingFormat/HeadingFormatStyle";

const ClientList = ({ client, handleRemove }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
      <HeadingFormatContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BoxContainerColoum>
              <Avatar src={profile} sx={{ width: "130px", height: "130px" }} />
              <HeadingFormatSubTitle sx={{ my: 2 }}>
                {client.ClientId}
              </HeadingFormatSubTitle>
            </BoxContainerColoum>
          </Grid>
          <Grid xs={12} md={8} item>
            <BoxContainer>
              <HeadingFormatTitle sx={{ p: 0 }}>
                {client.FullName}
              </HeadingFormatTitle>
              <ListMenuClient
                id={client.id}
                handleRemove={handleRemove}
              ></ListMenuClient>
            </BoxContainer>
            <HeadingFormatSubTitle sx={{ p: 0 }}>
              {client.CompanyName}
            </HeadingFormatSubTitle>

            <Typography variant="body1" sx={{ my: 2, textAlign: "justify" }}>
              {client.Description}
            </Typography>
            <Link
              to={`/client/profile/${client.id}`}
              style={{ textDecoration: "none" }}
            >
              <BigButtonMake>Profile</BigButtonMake>
            </Link>
          </Grid>
        </Grid>
      </HeadingFormatContainer>
    </Grid>
  );
};

export default ClientList;
