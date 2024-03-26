//selectblog.jsx
//imports 
import React from "react";
import { NavLink } from "react-router-dom";//for routing
import FoodImage from "../images/food1.png";
import FamilyImage from "../images/fam.png";
import ReflectImage from "../images/ref.png";
import FitnessImage from "../images/fit.png";
import "../App.css"; 


//funct to pick a section via a button to then navigate to open it in readblog page
//used tailwind css for page layout
function SelectBlog() {
  return (
    <div className="search-blog-container" style={{ backgroundColor: "#f0f0f0" }}>
      <h1> </h1>

      <div className="button-container">
        
        <NavLink to={{ pathname: "/read/fitness" }} className="blog-link">

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

        <NavLink to={{ pathname: "/read/family" }} className="blog-link">

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

        <NavLink to={{ pathname: "/read/reflection" }} className="blog-link">

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

       
        <NavLink to={{ pathname: "/read/food", search: "?section=food-section" }} className="blog-link">

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
//-----------------------------------------END CODE-----------------------------------------//