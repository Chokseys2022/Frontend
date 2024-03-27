// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" label="Select Blog">
              Select Blogs
            </Link>
          </li>
          <li>
            <Link to="/read" label="Read Blog">
              Read Blogs
            </Link>
          </li>
          <li>
            <Link to="/manage" label="Manage Blogs">
              Manage Blogs
            </Link>
          </li>
          <li>
            <Link to="/wordsearch" label="Dictionary">
              Word Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
//----------------------------------------END CODE-------------------------------------//