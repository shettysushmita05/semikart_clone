import React from "react";
import "./right-section.css";
import Tabs from "./Tabs";
import RightBottom from "./RightBottom";

const RightSection = () => {
  return (
    <div className="right-container">
      <div className="container-box">
        <h3>Log in to continue to your account.</h3>
        <Tabs />
        <h4 className="or-text">OR</h4>
        <RightBottom/>
      </div>
    </div>
  );
};

export default RightSection;
