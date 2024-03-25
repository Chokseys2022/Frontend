//App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import SearchBlog from "./pages/SearchBlog.jsx";
import ReadBlog from "./pages/ReadBlog.jsx";
import ManageBlog from "./pages/ManageBlog.jsx";
import WordSearch from "./pages/WordSearch.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchBlog />} />
          <Route path="/read" element={<ReadBlog />} />
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
