import React from "react";
import "./About.css";
import "./AboutCard.css";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <AboutCard src="images/sven-mieke.jpg" path="/services" />
      </div>
    </div>
  );
}

export default About;
