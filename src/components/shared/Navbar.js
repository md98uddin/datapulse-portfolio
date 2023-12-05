import React from "react";
import { Link } from "react-router-dom";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import "../../css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <h1 className="nav-header">DataPulse Techs</h1>
        <h2 className="nav-title">
          Innovative IT Solutions for a Connected World
        </h2>
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
          <li>
            <a href="tel:6031112298" style={{ marginLeft: "auto" }}>
              <FaPhone /> 603-111-2298
            </a>
          </li>
          <li>
            <a href="mailto:abc@123.com" style={{ marginLeft: "auto" }}>
              <FaMailBulk /> Email Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
