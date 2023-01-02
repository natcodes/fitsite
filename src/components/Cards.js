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
              src="images/img-9.jpg"
              text="Get the push you need to reach your goals"
              label="1:1 FITNESS TRAINING"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Train with a buddy or partner"
              label="1:2 Fitness Training"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Make your fitness journey a party"
              label="Group Fitness Sessions"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
