import React from "react";
import "../../css/ServicesCard.css";
import { services } from "../../utils/StaticData";

export const ServicesCard = () => {
  return (
    <div class="main">
      <h1>Services We Offer</h1>
      <ul class="cards">
        {services.map((service) => (
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={window.location.origin + service.img} />
              </div>
              <div class="card_content">
                <h2 class="card_title">{service.title}</h2>
                <p class="card_text">{service.description}</p>
                <button class="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
