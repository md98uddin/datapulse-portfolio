import React from "react";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import "../../css/ServicesBrochure.css";

export const ServicesBrochure = ({ service }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const styling = {
    grid: {
      background: `radial-gradient(
        circle at -4% -12.9%,
        rgb(74, 98, 110) 0.3%,
        rgb(74,98,110)
      )`,
      border: "none",
      borderColor: `radial-gradient(
        circle at -4% -12.9%,
        rgb(74, 0, 110) 0.3%,
        rgb(4,98,110)`,
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="box">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="grid">
          <Item className="grid-item" style={styling.grid}>
            <>
              <img src={service.img} style={{ objectFit: "fill" }} />
            </>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} className="grid">
          <Item className="grid-item" style={styling.grid}>
            <p>{service.description}</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
