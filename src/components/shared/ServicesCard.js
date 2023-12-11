import React from "react";
import "../../css/ServicesCard.css";
import { services } from "../../utils/StaticData";

export const ServicesCard = () => {
  return (
    <div className="main">
      <h1 className="header">Services We Offer</h1>
      <ul className="cards">
        {services.map((service) => (
          <li className="cards_item" key={service.id}>
            <div className="card">
              <div className="card_image">
                <img src={window.location.origin + service.img} />
              </div>
              <div className="card_content">
                <h2 className="card_title">{service.title}</h2>
                <p className="card_text">{service.description}</p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
