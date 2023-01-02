import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          {/* <Link  to={props.path}> */}
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Travel" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h3 className="cards__title__label"> {props.label} </h3>
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
        {/* </Link> */}
      </li>
    </>
  );
}

export default CardItem;
