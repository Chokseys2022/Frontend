//App.jsx
// Import necessary modules from React and React Router
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
// Import CSS styles and components
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// Import page components
import Home from "./pages/Home.jsx";
import SelectBlog from "./pages/SelectBlog.jsx";
import ReadBlog from "./pages/ReadBlog.jsx";
import ManageBlog from "./pages/ManageBlog.jsx";
import WordSearch from "./pages/WordSearch.jsx";

//defining theh main app components
function App() {
  return (
    //Wrap the entire app with the BrowserRouter component to enable routing.
    //defining paths to differnt pages
    //The :article dynamic segment allows for dynamic routing. It captures any value that appears in the URL segment after "/read/".
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SelectBlog />} />
          <Route path="/read" element={<ReadBlog />} />
          <Route path="/read/:article" element={<ReadBlog />} />
          <Route path="/manage" element={<ManageBlog />} />
          <Route path="/wordsearch" element={<WordSearch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//----------------------------------------END CODE-------------------------------------//
