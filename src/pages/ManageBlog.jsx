import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogData");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Error fetching blog data! Please try again later.");
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000", formData);
      // clear form data and refetch blogs
      setFormData({
        title: "",
        content: "",
        author: "",
      });
      fetchBlogData();
    } catch (error) {
      console.error("Error posting blog data:", error);
      setError("Error posting blog data! Please try again later.");
    }
  };

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
