import React, { useState } from "react";
import "./passwordLogin.css";
import EmailImage from "../../.././../../assets/images/mail-box.png";
import PasswordImage from "../../.././../../assets/images/lock.png";
import EyeOpen from "../../.././../../assets/images/eye-open.png";
import EyeClosed from "../../.././../../assets/images/eye-closed.png";

const PasswordLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <div className="input-main-container">
        <p>Enter Email</p>
        <div className="input-image-combo">
          <img src={EmailImage} alt="email" className="image" />
          <input type="email" className="mail-input" />
        </div>
      </div>

      <div className="input-main-container">
        <div className="password-section">
          <p>Password</p>
          <div>
            <button className="forgot-password-button">Forgot Password?</button>
          </div>
        </div>
        <div className="input-image-combo">
          <img src={PasswordImage} alt="email" className="image" />
          <input
            type={showPassword ? "text" : "password"}
            className="mail-input password-input"
          />
          <div>
            <button onClick={toggleShowPassword} className="eye-button">
              <img
                src={showPassword ? EyeClosed : EyeOpen}
                alt="email"
                className="image eye-image"
              />
            </button>
          </div>
        </div>
        <div className="login-button-container">
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordLogin;
