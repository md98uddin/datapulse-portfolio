import {
  Computer,
  DataObject,
  ErrorOutlined,
  PhonelinkSetup,
  TimelineOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import "../../css/ServicesCard.css";
import { services } from "../../utils/StaticData";

export const ServicesCard = () => {
  function renderServiceIcon(id) {
    console.log("id", id);
    switch (id) {
      case 1: {
        return <Computer className="service-icon" />;
      }
      case 2: {
        return <PhonelinkSetup className="service-icon" />;
      }
      case 3: {
        return <TimelineOutlined className="service-icon" />;
      }
      case 4: {
        return <DataObject className="service-icon" />;
      }
      default: {
        return <ErrorOutlined className="service-icon" />;
      }
    }
  }
  return services.map((service) => (
    <Card
      sx={{ minWidth: 250 }}
      style={{
        margin: "0.75em",
        justifyContent: "center",
        textAlign: "center",
      }}
      key={service.id}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "#c7e2d5" }}
            aria-label="recipe"
            style={{ marginLeft: "auto", marginRight: "0" }}
          >
            {renderServiceIcon(service.id)}
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="h6" component="div" className="title">
          {service.title}
        </Typography>
        <Typography variant="subtitle1" component="div" className="description">
          {service?.description.substring(0, 50) + "..."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ justifyContent: "center" }}>
        <Link to="/our-services">
          <Button variant="text" className="read-btn">
            READ MORE
          </Button>
        </Link>
      </CardActions>
    </Card>
  ));
};
