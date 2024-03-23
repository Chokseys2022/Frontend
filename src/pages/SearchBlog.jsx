import React from "react";
import { NavLink } from "react-router-dom";
import danceImage from "../images/dance.jpg";
import famImage from "../images/fam.jpg";
import thoughtImage from "../images/thought.jpg";
import foodImage from "../images/food.png";
import "../App.css"; // Import CSS for styling

function SearchBlog() {
  return (
    <div className="search-blog-container">
      <h1 className="search-blog-heading">SEARCH</h1>

      <div className="button-container">
        <NavLink to="/read#fitness-section" className="blog-link">
          <img className="image" src={danceImage} alt="dance" />
          <div className="description">Explore articles on various fitness forms, tutorials, and fitness culture.</div>
        </NavLink>

        <NavLink to="/read#fam-section" className="blog-link">
          <img className="image" src={famImage} alt="family" />
          <div className="description">Discover heartwarming stories, tips on parenting, and family bonding activities.</div>
        </NavLink>

        <NavLink to="/read#thought-section" className="blog-link">
          <img className="image" src={thoughtImage} alt="reflection" />
          <div className="description">Engage in thoughtful reflections, personal essays, and philosophical discussions.</div>
        </NavLink>

        <NavLink to="/read#food-section" className="blog-link">
          <img className="image" src={foodImage} alt="food" />
          <div className="description">Indulge in culinary delights, recipes from around the world, and foodie adventures.</div>
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBlog;
