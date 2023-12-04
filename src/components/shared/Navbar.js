import React from "react";
import { Link } from "react-router-dom";
import "../../css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <h1>DataPulse Techs</h1>
        <p>Innovative IT Solutions for a Connected World</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link to={"/pricing"}>Pricing</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
