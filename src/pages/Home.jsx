import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.png";
import "./Home.css";
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCards";
import services from "../data/services.json";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Pamper Your Pets with the Care They Deserve</h1>
          <p>Professional pet services designed for comfort and joy.</p>
          <Link to="/booking" className="cta-button">
            Book Here!
          </Link>
        </div>
        <div className="hero-image">
          <img src={Hero} alt="Happy dog and cat" />
        </div>
      </section>

      <section className="services-preview">
        <h2 className="title">Our Services</h2>
        <div className="services-grid">
          {services.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="services-button-wrapper">
        <Link to="/services" className="services-button">
          View All Services
        </Link>
        </div>
      </section>
      <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At <strong>Pawfect Services</strong>, we're more than just a pet care company — we're a team of animal lovers dedicated to making life easier, happier, and healthier for your furry companions.
        </p>
        <p>
          Whether your pup needs a walk, your kitty needs grooming, or you're heading out of town and want peace of mind — we've got you covered. From professional pet sitting to convenient mobile grooming, each of our services is designed with love, comfort, and safety in mind.
        </p>
        <p>
          Our trusted team is trained, insured, and ready to treat your pets like their own. Because to us, pets aren’t just animals — they’re family. 🐶🐱🐾
        </p>
      </div>
    </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
