// import React from "react";
// import "./otpLogin.css";
// import EmailImage from "../../.././../../assets/images/mail-box.png";

// const OtpLogin = () => {
//   return (
//     <div className="container">
//       <div className="input-main-container">
//         <p>Enter Email</p>
//         <div className="input-image-combo">
//           <img src={EmailImage} alt="email" className="image" />
//           <input type="email" className="mail-input" />
//         </div>
//       </div>

//       <div className="input-main-container">
//         <p>Enter OTP</p>
//         <div className="input-image-combo">
//           <input type="number" className="mail-input otp-input" />
//         </div>
//       </div>

//       <div className="otp-button-container">
//         <div>
//           <button className="login-button">Login</button>
//         </div>
//         <div>
//           <button className="login-button">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpLogin;




import React, { useState } from "react";
import "./otpLogin.css";
import EmailImage from "../../.././../../assets/images/mail-box.png";

const OtpLogin = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Basic email validation using regular expression
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setValidEmail(isValidEmail);
  };

  const handleSubmit = () => {
    if (validEmail) {
      // Proceed with your login logic here
      console.log("Valid email:", email);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="container">
      <div className="input-main-container">
        <p>Enter Email</p>
        <div className="input-image-combo">
          <img src={EmailImage} alt="email" className="image" />
          <input
            type="email"
            className={`mail-input ${!validEmail ? "invalid" : ""}`}
            value={email}
            onChange={handleEmailChange}
          />
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
          <button className="login-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpLogin;
