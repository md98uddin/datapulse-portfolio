import { AccountCircle, EmailOutlined } from "@mui/icons-material";
import { Grid, Box, TextField, Button, ThemeProvider } from "@mui/material";
import React, { useContext, useState } from "react";
import {
  FaBuilding,
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "../../css/Footer.css";
import { services } from "../../utils/StaticData";
import { ContextWrapper } from "./ContextWrapper";
import { theme } from "./Themes";

export const Footer = (props) => {
  const [email, setEmail] = useState("");
  let contextProvider = useContext(ContextWrapper);

  const onSubscribeClick = (e) => {
    let errorState = false;
    if (!email) {
      errorState = true;
    } else {
      if (!email.match(/^\S+@\S+\.\S+$/)) {
        errorState = true;
      } else {
        // lets finish logic to send a sign up email as well as add to subscribed list
        errorState = false;
      }
    }

    console.log("error state", errorState);
    props.onEmailSubscribe(errorState);
  };
  return (
    <footer>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#0065c1",
          padding: "1px 1px 1px 1px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <p>Logo</p>
              <br />
              <p>Newsletter Sign Up</p>
              <p>Sign up for latest news and offers</p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "3em",
                }}
              >
                <EmailOutlined
                  sx={{
                    color: "white",
                    mr: 1,
                    my: 2,
                  }}
                />
                {props.success ? (
                  <p>
                    Subscribed <FaCheck />
                  </p>
                ) : (
                  <ThemeProvider theme={theme}>
                    <TextField
                      error={contextProvider.emailError}
                      id="input-with-sx"
                      label="Email Address"
                      helperText={
                        contextProvider.emailError ? "Email is not valid" : ""
                      }
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </ThemeProvider>
                )}
              </Box>
              <Button
                variant="contained"
                style={{ alignSelf: "center", margin: "1em 0 0 6em" }}
                onClick={(e) => onSubscribeClick(e)}
              >
                SUBSCRIBE
              </Button>
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
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <p className="caption-style">
                Copyright © 2024 Datapulse Techs All rights reserved.{" "}
              </p>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    </footer>
  );
};
