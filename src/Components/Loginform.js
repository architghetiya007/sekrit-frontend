import React from "react";
import "./Loginform.css"; // Import the styles
import Logo from "./../Images/logo.png";
// import { MdMailOutline } from "react-icons/md";

const LoginForm = () => {
  return (
    <div className="login-container">
      <img src={Logo} className="logo" />
      <p className="subtitle">Sign In to Sekrit</p>
      <div className="login-box">
        <div className="login-box-content">
          <div className="login-options">
            <button className="login-btn email-btn">Login with E-mail</button>
            <button className="login-btn github-btn">Login with GitHub</button>
          </div>
          <p className="policy-text">
            By logging in, you agree to Sekrit's <a href="#">Privacy Policy</a>{" "}
            and <a href="#">Terms of Use</a>.
          </p>

          <p className="signup-text">
            Don't have an account yet? <br />
            <a href="#" className="signup-link">
              Sign up for a free trial
            </a>{" "}
            or <a href="#">Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
