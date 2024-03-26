//ManageBlog.jsx
//imports
import React, { useState, useEffect } from "react";
import axios from "axios";

//state variables to manage blog data, loading and error state
const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //funct to fetch data from mongodb
    const fetchBlogData = async () => {
      try {
        //GET request to fetch data using axios
        const response = await axios.get("http://localhost:3000/blogData");
        //update blog state with data that is fetched
        setBlogs(response.data);
        //false if data fetched
        setLoading(false);
      } catch (error) {
        //handle error if fetching the data fails
        console.error("Error fetching blog data:", error);
        console.log(error);
        setError("Error fetching blog data! Please try again later.");
        //false if data fetch fails
        setLoading(false);
      }
    };
    //call this when page mounts
    fetchBlogData();
  }, []); //empty dependency - ensures effect runs just once after intitial render

  return (
    <div className="manage-blog-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                {blog.title}
              </h2>
              <p>{blog.topic}</p>
              <p>{blog.content}</p>
              <p>{blog.entryDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageBlog;
//-----------------------------------------END CODE-----------------------------------------//
