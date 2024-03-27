import React, { useState } from "react";

function SignInForm() {
  // State variables to store form input values and error message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();// Prevent default form submission behavior
    // ensure all fields are filled
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;//exit if validation fails
    }
//if val success-log form data
    console.log("Form submitted:", { name, email, password });
    // Reset form after successful registration
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
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
  );
}

export default SignInForm;
//-----------------------------END CODE--------------------------------//
