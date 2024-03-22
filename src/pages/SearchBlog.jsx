import React from "react";
import { NavLink } from "react-router-dom";

function SearchBlog() {
  return (
    <div>
      <h1>SEARCH</h1>
      <div className="button-container">
        <NavLink to="/read">
          <img src={"./dance.jpg"} alt="Button 1" />
          {/* <img src={('./images/dance.jpg')} /> */}
        </NavLink>
        <NavLink to="/read">
          <img src="fam.jpg" alt="Button 2" />
        </NavLink>
        <NavLink to="/read">
          <img src="thought.jpg" alt="Button 3" />
        </NavLink>
        <NavLink to="/read">
          <img src="food.png" alt="Button 4" />
        </NavLink>
      </div>
    </div>
  );
}
export default SearchBlog;
