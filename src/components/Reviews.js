/* include the cards component for formatting but change to 
include review stars and testimonials as well as the Thumbtack link */
import React from "react";
import "./Reviews.css";
import ReviewCardItem from "./ReviewCardItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const url =
  "https://www.thumbtack.com/ca/sacramento/personal-trainers/zion-health-wellness/service/187502423095649313?utm_medium=web&utm_source=txt&surface=sp";
function Reviews() {
  return (
    <div className="rev_container">
      <h1 className="rev_header">Reviews</h1>
      <div className="rev__cards__container">
        <ul className="rev__cards__items">
          <ReviewCardItem
            src="images/karsten-winegeart-1-1.jpg"
            client="Dianall G."
            review="Great and easy to work with help me loose 40 lbs in 2 moths and I didn't have to do a ridiculous diet that's the best part affordable and all around a great experience."
            label="What Dianall has to say:"
            path="/services"
          />
          <ReviewCardItem
            src="images/victor-freitas-partner-sessions.jpg"
            client="Sarah N."
            review="So happy to be working with Steve! He is professional, knowledgeable and a great motivator. Our workouts are tailored to my specific needs and never boring. Really appreciate the positivity and..."
            label="What Sarah has to say:"
            path="/services"
          />
          <ReviewCardItem
            src="images/gabin-vallet-group_sessions.jpg"
            client="Christa M."
            review="Steve is great!"
            label="What Christa has to say:"
            path="/services"
          />
        </ul>
      </div>
      <div className="read_reviews" href="shorturl.at/di279">
        <a href={url} target="_blank">
          <div className="read_reviews">
            Read all reviews
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Reviews;
