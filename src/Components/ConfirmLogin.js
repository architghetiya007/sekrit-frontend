import React from "react";
import "./ConfirmLogin.css";
import Logo from "./../Images/logo.png";

const ConfirmLogin = () => {
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
          <button className="continue-btn">Continue</button>
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
