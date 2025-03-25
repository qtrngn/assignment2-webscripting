import React from "react";
import "./ServiceCards.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;