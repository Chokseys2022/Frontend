import React from "react";
import { NavLink } from "react-router-dom";
import FoodImage from "../images/Food.png";
import FamilyImage from "../images/Family.png";
import ReflectImage from "../images/Reflect.png";
import FitnessImage from "../images/Fitness.png";
import "../App.css"; // Import CSS for styling

function SearchBlog() {
  return (
    <div className="search-blog-container">
      <h1 className="search-blog-heading">SEARCH</h1>

      <div className="button-container">
        <NavLink to="/read#fitness-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={FitnessImage} alt="dance" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Health and Fitness</div>
              <p className="text-gray-700 text-base">
                Explore articles on various fitness forms, tutorials, and fitness culture.
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#workout</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">excercise</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fitness</span>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#fam-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={FamilyImage} alt="family" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Family and Work Life Balance</div>
              <p className="text-gray-700 text-base">
                Discover heartwarming stories, tips on parenting, and family bonding activities.
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#family</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#parenting</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#worklifebalance</span>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#thought-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={ReflectImage} alt="reflection" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Reflections</div>
              <p className="text-gray-700 text-base">
                Engage in thoughtful reflections, personal essays, and philosophical discussions.
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#personaldevelopment</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reflection</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#philosphy</span>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#food-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={FoodImage} alt="food" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Favorite Foods</div>
              <p className="text-gray-700 text-base">
                Indulge in culinary delights, recipes from around the world, and foodie adventures.
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#foodie</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#recipes</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#culinaryadventures</span>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBlog;
