import React from "react";
import "./left-section.css";
import signupImage from "../../../assets/images/signup-image.png";

const LeftSection = () => {
  return (
    <div className="left-container">
      <div className="text-box">
        <h2>Welcome Back to Semikart</h2>
        <p>All Your Electronic Need Is Here And Classified!</p>
      </div>
      <img src={signupImage} alt="sign-up" />
    </div>
  );
};

export default LeftSection;
