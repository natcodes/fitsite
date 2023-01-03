import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCircleXmark,
  faStar,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";
library.add(faBars, faCircleXmark, faStar, faArrowUpRightFromSquare);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// {
//   /
// }
