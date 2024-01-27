import { Grid, Box } from "@mui/material";
import React from "react";
import {
  FaBuilding,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "../../css/Footer.css";
import { services } from "../../utils/StaticData";

export const Footer = () => {
  return (
    <footer>
      <Box sx={{ flexGrow: 1, backgroundColor: "#0065c1" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <p>Logo</p>
            <br />
            <p>Newsletter Sign Up</p>
            <p>Sign up for latest news and offers</p>
          </Grid>
          <Grid item xs={12} sm={3}>
            <p className="title-style">Services</p>
            <ul>
              {services?.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <p className="title-style">About Us</p>
            <ul>
              <li role="link">Our Mission</li>
              <li>Meet the Team</li>
              <li>Client Reviews</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <p className="title-style">Contact Us</p>
            <ul>
              <li>
                <a href="tel:5168826894">
                  <FaPhone /> 516-882-6894
                </a>
              </li>
              <li>
                <a href="mailto:datapulsetechs@gmail.com">
                  <FaMailBulk /> Email Us
                </a>
              </li>
              <li>
                <FaBuilding /> 1523 Moore Drive, New York City
              </li>
              <br />
              <ul className="social-links">
                <li style={{ fontSize: "2em" }}>
                  <FaFacebook /> <FaLinkedin /> <FaInstagram />
                </li>
              </ul>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};
