// Header.js
import React from 'react';
import "../App.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="/" label="Home">Home</a></li>        
          <li><a href="/about" label="Search Blog">Search Blogs</a></li>
          <li><a href="/blogs" label="Read Blog">Read Blogs</a></li>
          <li><a href="/logIn" label="LogIn">Manage Blogs</a></li>
        </ul>
      </nav>
      <h1>This is the header</h1>
    </header>
  );
};

export default Header;
