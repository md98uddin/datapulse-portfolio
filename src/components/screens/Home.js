import React from "react";
import { ServicesCard } from "../shared/ServicesCard";
import "../../css/Home.css";
import { Box, Button, Grid } from "@mui/material";
import { Reviews } from "../shared/Reviews";

export const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <div className="landing-header">
            <p className="welcome">Welcome to</p>
            <p className="brand">DATAPULSE TECHS</p>
            <p className="caption">
              "Your trusted partner for innovative IT solutions."
            </p>
            <Button variant="contained">CONTACT US</Button>
          </div>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "2em" }}>
          <p className="services">Services We Offer</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ServicesCard />
          </div>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "2em" }}>
          <Reviews />
        </Grid>
      </Grid>
    </Box>
  );
};
