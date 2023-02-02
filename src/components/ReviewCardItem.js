import React from "react";
// import { Link } from "react-router-dom";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReviewCardItem(props) {
  return (
    <>
      <li className="rev__cards__item">
        <div className="rev__cards__item__link">
          <div className="rev__cards__item__pic-wrap">
            <div className="star_container">
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </div>
            <div className="client">{props.client}</div>
          </div>
          <div className="rev__cards__item__info">
            <h3 className="rev__cards__title__label"> {props.label} </h3>
            <h5 className="rev__cards__item__text">{props.review}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default ReviewCardItem;
