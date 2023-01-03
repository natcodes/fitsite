import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1 className="header">Fitness Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/karsten-winegeart-1-1.jpg"
              text="Get the push you need to reach your goals"
              label="1:1 FITNESS TRAINING"
              path="/services"
            />
            <CardItem
              src="images/victor-freitas-partner-sessions.jpg"
              text="Train with a buddy or partner"
              label="1:2 FITNESS TRAINING"
              path="/services"
            />
            <CardItem
              src="images/gabin-vallet-group_sessions.jpg"
              text="Make your fitness journey a party"
              label="GROUP FITNESS SESSIONS"
              path="/services"
            />
          </ul>
          <h1 className="header">Nutrition Services</h1>

          <ul className="cards__items">
            <CardItem
              src="images/lily-banse-nutrition-plans.jpg"
              text="Whether you are meal planning or cooking fresh, we can help"
              label="NUTRITION PLANS"
              path="/products"
            />
            <CardItem
              src="images/tyler-nix-groceries.jpg"
              text="Learn to make better food choices based on your goals and ailments"
              label="NUTRITIONAL EDUCATION"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
