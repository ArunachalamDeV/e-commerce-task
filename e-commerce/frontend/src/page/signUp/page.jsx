// src/components/SignUp.js
import React, { useState } from "react";
import "./signup.css"; // Importing the CSS file
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token)
    fetch("http://localhost:3333/check", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          router("/");
        }
      });

  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation or sign-up logic here
    fetch(`http://localhost:3333/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password, // You may need to encrypt the password before sending it to the server.  In this example, we're simply sending it as plain text.  In a real-world application, you'd typically encrypt the password before sending it.  Here's an example of how you might do it with bcrypt: https://www.npmjs.com/package/bcryptjs
      }), // Sending form data as JSON object to the server.  Note: You may need to adjust the server-side implementation.  In this example, we're using a mock server.  In a real-world application, you'd typically send this data to a server-side API.  Here's an example of how you might do it with Axios: https://github.com/axios/axios/blob/main/README.md#sending-data-with-the-post-method-example
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          localStorage.setItem("token",data.token);
          localStorage.setItem("email",JSON.stringify(data.email));
          localStorage.setItem("name",JSON.stringify(data.name));
          router("/");
        }
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
