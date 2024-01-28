import React from "react";
import { ServicesCard } from "../shared/ServicesCard";
import "../../css/Home.css";
import { Navbar } from "../shared/Navbar";
import { Footer } from "../shared/Footer";
import { Box, Button, Grid, ThemeProvider } from "@mui/material";
import { theme } from "../shared/Themes";

export const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
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
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
