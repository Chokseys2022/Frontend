//manageblog.jsx
//imports
import React, { useState, useEffect } from "react";
import axios from "axios";

//useState variables for managing blogs, loading state, error state, and form data
const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]); //to store fetched blogs
  const [loading, setLoading] = useState(true); //manage loading st
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    //form data for adding new blogs
    title: "",
    content: "",
    author: "",
  });

  //useEffect to fetch blog data when the component mounts
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogData");
        setBlogs(response.data); //set fetched blogs
        setLoading(false); //set loading state to false
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Error fetching blog data! Please try again later.");
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  //Funct to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Funct to handle form submission for adding new blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000", formData); //send POST req
      // clear form data and refetch blogs
      setFormData({
        title: "",
        content: "",
        author: "",
      });
      fetchBlogData();//fetch data after submit
    } catch (error) {
      console.error("Error posting blog data:", error);
      setError("Error posting blog data! Please try again later.");
    }
  };

//appropriate content is displayed to users based on the current state of data fetching: either a loading message, an error message, or the fetched blogs.
  return (
    <div className="manage-blog-container">
      <hr />
      <div className="blog-list">
        
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {blogs.map((blog) => (
              <li key={blog._id}>
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-content">{blog.content}</p>
                <p className="blog-author">Author: {blog.author}</p>
                <p className="blog-date">Date: {blog.entryDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="add-blog-form">
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ManageBlog;

//-----------------------------END CODE----------------------------//
