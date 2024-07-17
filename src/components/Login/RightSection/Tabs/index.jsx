import React, { useState } from "react";
import "./tabs.css"; // Import the CSS file for styling
import OtpLogin from "./OtpLogin";
import PasswordLogin from "./PasswordLogin";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("password");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "password" ? "active" : ""}`}
          onClick={() => handleTabClick("password")}
        >
          Via Password
        </button>
        <button
          className={`tab ${activeTab === "otp" ? "active" : ""}`}
          onClick={() => handleTabClick("otp")}
        >
          Via OTP
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "password" ? <PasswordLogin /> : <OtpLogin />}
      </div>
    </div>
  );
};

export default Tabs;
