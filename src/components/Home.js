import React from "react";
import { ServicesCard } from "./shared/ServicesCard";
import "../css/Home.css";
import { Navbar } from "./shared/Navbar";

export const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="HomePage.css" />
        <title>TechSolve Hub - IT Solutions</title>
      </head>
      <body>
        <header>
          <h1>DataPulse Techs</h1>
          <p>Innovative IT Solutions for a Connected World</p>
        </header>

        <Navbar />

        <section id="home">
          <h2>Welcome to DataPulse Techs</h2>
          <p>Your trusted partner for innovative IT solutions.</p>
        </section>

        <ServicesCard />

        <h3 class="made_by">Made with ♡</h3>
      </body>
    </html>
  );
};
