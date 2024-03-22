import React from "react";
import { NavLink } from "react-router-dom";

function SearchBlog() {
  return (
    <div>
      <h1>SEARCH</h1>
      <div className="button-container">
        <NavLink to="/read#dance-section">
          <img src={"./dance.jpg"} alt="dance" />
        </NavLink>
        <NavLink to="/read#fam-section">
          <img src="fam.jpg" alt="family" />
        </NavLink>
        <NavLink to="/read#thought-section">
          <img src="thought.jpg" alt="reflection" />
        </NavLink>
        <NavLink to="/read#food-section">
          <img src="food.png" alt="food" />
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBlog;
