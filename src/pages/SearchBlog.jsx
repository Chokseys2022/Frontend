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
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={danceImage} alt="dance" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Explore articles on various fitness forms, tutorials, and fitness culture.
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#fam-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={famImage} alt="family" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Discover heartwarming stories, tips on parenting, and family bonding activities.
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#thought-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={thoughtImage} alt="reflection" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Engage in thoughtful reflections, personal essays, and philosophical discussions.
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/read#food-section" className="blog-link">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={foodImage} alt="food" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Indulge in culinary delights, recipes from around the world, and foodie adventures.
              </p>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBlog;
