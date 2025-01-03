import React from "react";
import "./Loginform.css"; // Import the styles
import Logo from "./../Images/logo.png";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    navigate("/confirm-login");
  };
  return (
    <div className="login-container">
      <img src={Logo} className="logo" alt="logo" />
      <p className="subtitle">Sign In to Sekrit</p>
      <div className="login-box">
        <div className="login-box-content">
          <div className="login-options">
            <button className="login-btn email-btn" onClick={handleLogin}>
              <MdMailOutline />
              Login with E-mail
            </button>
            <button className="login-btn github-btn" onClick={handleLogin}>
              <FaGithub />
              Login with GitHub
            </button>
            <p className="policy-text">
              By logging in, you agree to Sekrit's{" "}
              <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.
            </p>

            <p className="signup-text">
              <p>Don't have an account yet? </p>
              <br />
              <a href="#" className="signup-link">
                Sign up for a free trial
              </a>
              <span> or </span>
              <a href="#" className="signup-link">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
