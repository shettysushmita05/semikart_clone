// src/Login.js
import React from "react";
import "./Login.css";
import NavBar from "../NavBar";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const Login = () => {
  return (
    <div>
      <NavBar />
      <div className="login-container">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Login;
