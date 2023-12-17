import React, { useEffect, useState } from "react";
import {
  FaAngleUp,
  FaDesktop,
  FaTablet,
  FaCloud,
  FaDatabase,
  FaXing,
} from "react-icons/fa";
import { MdDataArray } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { Navbar } from "../shared/Navbar";
import { filterKeys, services } from "../../utils/StaticData";
import "../../css/Services.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { filterServices } from "../../utils/HelpFunctions";
import { ServicesBrochure } from "../shared/ServicesBrochure";
import { Footer } from "../shared/Footer";

export const Services = () => {
  const [expandId, setExpandId] = useState("");
  const [filterKey, setFilter] = useState("");

  useEffect(() => {
    console.log(filterKey);
  }, [filterKey]);

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
        return <BsGraphUp className="icon-margin" />;
      case "6":
        return <MdDataArray className="icon-margin" />;
      default:
        return <FaXing />;
    }
  }

  function handleFilterChange(e, filter) {
    if (filter === "Clear X") {
      setFilter("");
    } else {
      setFilter(filter);
    }
  }

  function buttonStyling(filter) {
    if (filter === filterKey) {
      return "p-text active-btn";
    }

    return "p-text btn-style";
  }

  return (
    <div
      className="services-main"
      style={{ margin: 0, height: "100%", textAlign: "center" }}
    >
      <Navbar />
      <h1 className="request-header title-text">Our Services</h1>
      <div>
        <h1 className="p-text">Filter By</h1>
        <ButtonGroup variant="contained" className="p-text">
          {filterKeys.map((filter) => (
            <Button
              className={buttonStyling(filter)}
              key={filter}
              onClick={(e) => handleFilterChange(e, filter)}
            >
              {filter}
            </Button>
          ))}
        </ButtonGroup>
        {filterServices(filterKey, services).map((service) => (
          <Accordion
            expanded={expandId === service.id ? true : false}
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
              <Typography className="header ">
                {service.title} {renderIcon(service.id)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ServicesBrochure service={service} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Button className="btn-style p-text">BOOK A CONSULTATION</Button>
    </div>
  );
};
