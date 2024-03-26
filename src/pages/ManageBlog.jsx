import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blogData')
        ;
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        console.log(error);
        setError('Error fetching blog data! Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div>
      {loading ? ( // Check loading state
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {blogs.map(blog => (
            <li key={blog._id}>
              <h2>{blog.title}</h2>
              <p>{blog.topic}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageBlog;
