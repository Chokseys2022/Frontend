// Header.js
import React from 'react';
import "../App.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="/" label="Home">Home</a></li>
          <li><a href="/blogs" label="Blogs">Blogs</a></li>
          <li><a href="/about" label="About">About</a></li>
          <li><a href="/logIn" label="LogIn">Log In</a></li>
        </ul>
      </nav>
      <h1>This is the header</h1>
    </header>
  );
};

export default Header;
