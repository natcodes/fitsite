import React from "react";
import { Link } from "react-router-dom";
import "./AboutCard.css";

function AboutCard(props) {
  return (
    <>
      <h1 className="header"> About Us </h1>
      <br></br>
      <li className="about__cards__item">
        <div className="about__cards__item__link">
          {/* <Link  to={props.path}> */}
          <figure className="about__cards__item__pic-wrap">
            <img
              className="about__cards__item__img"
              alt="Travel"
              src={props.src}
            />
          </figure>
          <div className="about__cards__item__info">
            <h2 className="second_header"> Conception </h2>
            <h5 className="about__cards__item__text">
              Established in 2014, Zion Health and Wellness is a reputable and
              unique type of fitness and health services company. We specialize
              in private personal fitness training and nutrition counseling,
              helping our clients improve their overall health by decreasing
              stress levels, improving flexibility and coordination.
            </h5>
            <br></br>
            <h2 className="second_header"> Why us? </h2>
            <h5 className="about__cards__item__text">
              We take the guess work out of working out by providing you
              personalized virtual or in person fitness sessions. We understand
              that losing weight and gaining muscle can be challenging, and our
              goal is to help you overcome hurdles and reach your goals. We
              analyze your body type, BMI, and metabolism, to create your
              individualized fitness plan. You can travel to us or we can travel
              to you, saving you time. Workout one-on-one with a trainer or
              bring a buddy or even a group. Want a specific type of training
              style (HIIT, Weight Training, Plyo, Yoga), just request it.
            </h5>
          </div>
        </div>
        {/* </Link> */}
      </li>
    </>
  );
}

export default AboutCard;
