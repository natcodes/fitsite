import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const bars = <FontAwesomeIcon icon="fa-solid fa-bars" />
  // const closeIcon = <FontAwesomeIcon icon="fa-solid fa-xmark" />

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            { /* <img
              src="./images/white_icons8-lion-head-50.png"
              alt="lion head logo"
            /> */ }
            Zion Health and Wellness
        </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/reviews"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
