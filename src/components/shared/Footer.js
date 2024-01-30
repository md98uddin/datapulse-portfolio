import { EmailOutlined } from "@mui/icons-material";
import { Grid, Box, TextField, Button, Container } from "@mui/material";
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
        props.setInput("emailAddress", email);
        errorState = false;
      }
    }

    console.log("error state", errorState);
    props.onEmailSubscribe(errorState);
  };
  return (
    <Container
      className="container"
      style={{
        minWidth: "100%",
        background: "#0065c1",
        margin: "3em 0 0 0",
      }}
    >
      <Grid container>
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
              <TextField
                error={contextProvider.emailError}
                id="input-with-sx"
                label="Email Address"
                helperText={
                  contextProvider.emailError ? "Email is not valid" : ""
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </Box>
          <Button variant="contained" onClick={(e) => onSubscribeClick(e)}>
            SUBSCRIBE
          </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className="title-style">Services</p>
          <ul>
            {services?.map((service) => (
              <li className="foot-links" key={service.title}>
                {service.title}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className="title-style">About Us</p>
          <ul>
            <li className="foot-links" role="link">
              Our Mission
            </li>
            <li className="foot-links">Meet the Team</li>
            <li className="foot-links">Client Reviews</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className="title-style">Contact Us</p>
          <ul>
            <li className="foot-links">
              <a href="tel:5168826894">
                <FaPhone /> 516-882-6894
              </a>
            </li>
            <li className="foot-links">
              <a href="mailto:datapulsetechs@gmail.com">
                <FaMailBulk /> Email Us
              </a>
            </li>
            <li className="foot-links">
              <FaBuilding /> 1523 Moore Drive, New York City
            </li>
            <br />
            <ul className="social-links">
              <li className="foot-links" style={{ fontSize: "2em" }}>
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
    </Container>
  );
};
