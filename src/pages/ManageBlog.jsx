import React, { useState, useEffect } from "react";
import '../App.css'

const ManageBlog = () => {
  // State variables to manage blogs, input fields, and edit mode
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Load blog data from local storage on component mount
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  // Save blogs to local storage whenever 'blogs' state changes
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  // Function to handle adding a new blog or updating an existing one
  const handleSaveBlog = () => {
    if (editMode && editId) {
      // Update existing blog
      const updatedBlogs = blogs.map((blog) => {
        if (blog.id === editId) {
          return { ...blog, title, content };
        }
        return blog;
      });
      setBlogs(updatedBlogs);
      setEditMode(false);
      setEditId(null);
    } else {
      // Add new blog
      if (title.trim() !== "" && content.trim() !== "") {
        const newBlog = {
          id: Math.random().toString(36).substr(2, 9),
          title: title,
          content: content,
        };
        setBlogs([...blogs, newBlog]);
        setTitle("");
        setContent("");
      } else {
        alert("Please enter both title and content.");
      }
    }
  };

  // Function to handle deleting a blog
  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    if (editId === id) {
      setEditMode(false);
      setEditId(null);
    }
  };

  // Function to handle editing a blog
  const handleEditBlog = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setContent(blogToEdit.content);
      setEditMode(true);
      setEditId(id);
    }
  };

  // Function to handle manual save
  const handleManualSave = () => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
    alert("Blogs saved successfully.");
  };

  return (
    <div>
      {/* Title */}
      <h1>MANAGE BLOG</h1>
      <div>
        {/* Input fields for title and content */}
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {/* Button to add/update blog */}
        <button onClick={handleSaveBlog}>
          {editMode ? "Update Blog" : "Add Blog"}
        </button>
        {/* Button to manually save blogs */}
        <button onClick={handleManualSave}>Save</button>
      </div>
      {/* Table to display blogs */}
      <table className="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through blogs and render each blog as a table row */}
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.content}</td>
              {/* Buttons for editing and deleting a blog */}
              <td>
                <button onClick={() => handleEditBlog(blog.id)}>Edit</button>
                <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBlog;
