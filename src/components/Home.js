import React from "react";
import "../App.css";
import Cards from "./Cards";
import About from "./About";
import Reviews from "./Reviews";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Reviews />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
