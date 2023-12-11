import React from "react";
import { ServicesCard } from "../shared/ServicesCard";
import "../../css/Home.css";
import { Navbar } from "../shared/Navbar";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <h2>Welcome to DataPulse Techs</h2>
        <p>Your trusted partner for innovative IT solutions.</p>
      </section>

      <ServicesCard />

      <h3 className="made_by">Made with ♡</h3>
    </div>
  );
};
