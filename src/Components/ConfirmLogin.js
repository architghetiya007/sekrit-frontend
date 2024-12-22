import React, { useState } from "react";
import "./ConfirmLogin.css";
import Logo from "./../Images/logo.png";
import { loginUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

const ConfirmLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Reset error message
    try {
      const response = await loginUser(); // Call the API
      console.log(response, response["auth-token"], "datat?>>>>>");
      if (response) {
        // Store token in localStorage
        localStorage.setItem("auth-token", response["auth-token"]);

        // Redirect to the confirm-login page
        navigate("/confirm-login"); //TODO: Need to redirect to the third page of the home screen
      } else {
        setError("Failed to retrieve token. Please try again.");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials or try again.");
      console.error("Login Error:", error);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };
  return (
    <div className="background">
      <img src={Logo} className="logo" />
      <h2 className="subtitle">Sign in to Sekrit</h2>
      <div className="container">
        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="email-input"
          />
          <button
            className="continue-btn"
            onClick={handleLogin}
            disabled={loading}>
            {loading ? "Logging in..." : "Continue"}
          </button>
          <p>
            {" "}
            {error && (
              <div className="error-message">{JSON.stringify(error)}</div>
            )}{" "}
          </p>
          <p className="terms">
            By logging in, you agree to the Sekrit's Privacy Policy and Terms of
            Use.
          </p>
        </div>
        <div className="links">
          <a href="#login" className="link">
            Login a different way
          </a>
          <p>Don't have an account yet?</p>
          <a href="#signup" className="link">
            Sign up for a free trial
          </a>{" "}
          <span> or </span>
          <a href="#contact" className="link">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogin;
