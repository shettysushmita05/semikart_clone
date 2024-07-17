import React from "react";
import "./otpLogin.css";
import EmailImage from "../../.././../../assets/images/mail-box.png";

const OtpLogin = () => {
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
        <p>Enter OTP</p>
        <div className="input-image-combo">
          <input type="number" className="mail-input otp-input" />
        </div>
      </div>

      <div className="otp-button-container">
        <div>
          <button className="login-button">Login</button>
        </div>
        <div>
          <button className="login-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default OtpLogin;
