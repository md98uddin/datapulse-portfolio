import React, { useState } from "react";
import {
  FaAngleUp,
  FaHeadSideVirus,
  FaDesktop,
  FaTablet,
  FaCloud,
  FaDatabase,
  FaXing,
} from "react-icons/fa";
import { Navbar } from "../shared/Navbar";
import { services } from "../../utils/StaticData";
import "../../css/Services.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const Services = () => {
  const [expandId, setExpandId] = useState("1");

  function renderIcon(serviceId) {
    switch (serviceId) {
      case "1":
        return <FaDesktop className="icon-margin" />;
      case "2":
        return <FaTablet className="icon-margin" />;
      case "3":
        return <FaCloud className="icon-margin" />;
      case "4":
        return <FaDatabase className="icon-margin" />;
      case "5":
        return <FaHeadSideVirus className="icon-margin" />;
      default:
        return <FaXing />;
    }
  }
  return (
    <div className="services-main" style={{ margin: 0, height: "100%" }}>
      <Navbar />
      <h1 className="header request-header">Services we offer</h1>
      <div>
        {services.map((service) => (
          <Accordion
            expanded={expandId == service.id ? true : false}
            key={service.id}
            onChange={(e) => setExpandId(service.id)}
            style={{ backgroundColor: "red" }}
            className="accordion-main "
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<FaAngleUp className="icon-color" />}
            >
              <Typography className="header">
                {service.title} {renderIcon(service.id)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="p-text">{service.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
