'use client';

import axios from "axios";
import "../app/css/login.css"; 
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://127.0.0.1:8000/v1/login", {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`, // Encode username and password
        },
      });
      if (response.data.message === "Welcome back, admin! Login successful.") {
        Swal.fire({
          icon: "success",
          title: "Login success!!!",
          text: "You have been logged in successfully.",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Invalid username or password.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect to the server.",
      });
      // console.error("Error:", error);
    }
  };
  return (
    <div className="container font-jakarta">
      <div className="login-box">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <p className="slogan">
            Streamlining your seafood supply, one catch at a time!
          </p>
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" id="username" placeholder=" "  onChange={(e) => setUsername(e.target.value)} required/>
            <label htmlFor="username" className="floating-label">Username</label>
          </div>

          <div className="input-group">
            <input type="password" id="password" placeholder=" "  onChange={(e) => setPassword(e.target.value)} required />
            <label htmlFor="password" className="floating-label">Password</label>

          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
