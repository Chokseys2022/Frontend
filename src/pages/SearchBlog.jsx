import React from "react";
import { NavLink } from "react-router-dom";
import danceImage from "../images/dance.jpg";
import famImage from "../images/fam.jpg";
import thoughtImage from "../images/thought.jpg";
import foodImage from "../images/food.png";

function SearchBlog() {
  return (
    <div>
      <h1>SEARCH</h1>

      <div className="button-container">
        <NavLink to="/read#dance-section">
          <img className="image" src={danceImage} alt="dance" />
        </NavLink>

        <NavLink to="/read#fam-section">
          <img className="image" src={famImage} alt="family" />
        </NavLink>

        <NavLink to="/read#thought-section">
          <img className="image" src={thoughtImage} alt="reflection" />
        </NavLink>

        <NavLink to="/read#food-section">
          <img className="image" src={foodImage} alt="food" />
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBlog;
