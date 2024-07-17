import React from "react";
import "./right-bottom.css";
import GoogleSignIn from "../../../../assets/images/google-signin.png";

const RightBottom = () => {
  return (
    <div className="right-bottom-container">
      <div className="image-container">
        <img src={GoogleSignIn} alt="google-sign-in" />
      </div>

      <p>
        Don’t have an account? Click here to <span className="text-link">create</span> one now!
      </p>
      <p className="text-link">Resend Activation Link?</p>
    </div>
  );
};

export default RightBottom;
