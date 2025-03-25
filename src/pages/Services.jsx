import React from "react";
import ServiceCard from "../components/ServiceCards";
import services from "../data/services.json";
import './Services.css'

const Services = () => {
  return (
  <>
    <section className="services-preview">
      <h2 className="title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default Services;
