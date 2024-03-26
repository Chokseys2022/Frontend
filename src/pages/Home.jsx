//all imports
import React, { useState } from "react";
import Welcome from "../components/Welcome";
import "../App.css";
import backgroundImage from "../images/1.png"; // Import your background image

//state variables to manage input vals and err msgs in form
function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //funct to mangage form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation of all fields
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    //form sub details
    console.log("Form submitted:", { name, email, password });
    //reset the form after successful registration
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  //form elements
  return (
    <div className="container">
      <Welcome />
      <div className="formContainer">
        <h2>Sign In</h2>
        {error && <div className="errorMessage">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="sign-button">Sign In</button>
        </form>
        <p>Already have an account?</p>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Home;
