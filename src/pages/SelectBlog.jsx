import React from "react";
import { NavLink } from "react-router-dom";
import FoodImage from "../images/Food.png";
import FamilyImage from "../images/Family.png";
import ReflectImage from "../images/Reflect.png";
import FitnessImage from "../images/Fitness.png";
import "../App.css"; 

function SelectBlog() {
  return (
    <div className="search-blog-container" style={{ backgroundColor: "#f0f0f0" }}>
      <h1> </h1>

      <div className="button-container">
        <NavLink to="/read#fitness-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg image-container">
            <img className="w-full" my-4 src={FitnessImage} alt="fitness" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Health and Fitness</div>
              <p className="text-gray-700 text-base">
                Explore articles on various fitness forms, tutorials, and fitness culture.
              </p>
                            
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#fam-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg image-container">
            <img className="w-full" my-4 src={FamilyImage} alt="family" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Family and Work Life Balance</div>
              <p className="text-gray-700 text-base">
                Discover heartwarming stories, tips on parenting, and family bonding activities.
              </p>
              
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#thought-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg image-container">
            <img className="w-full" my-4 src={ReflectImage} alt="reflection" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Reflections</div>
              <p className="text-gray-700 text-base">
                Engage in thoughtful reflections, personal essays, and philosophical discussions.
              </p>
              
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#food-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg image-container">
            <img className="w-full" my-4 src={FoodImage} alt="food" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Favorite Foods</div>
              <p className="text-gray-700 text-base">
                Indulge in culinary delights, recipes from around the world, and foodie adventures.
              </p>
              
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SelectBlog;
