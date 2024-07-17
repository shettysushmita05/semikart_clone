import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/semikart-logo.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          <i className={`icon-hamburger ${isMobileMenuOpen ? "open" : ""}`}></i>
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li className="dropdown">
            Products
            <ul className="dropdown-content">
              <li className="dropdown-submenu">
                Enclosures
                <ul className="dropdown-submenu-content">
                  <li>Din Rail Mounting</li>
                  <li>Enclosures/Accessories</li>
                  <li>Enclosures</li>
                  <li>Enclosures - Accessories</li>
                  <li>Racks & Cabinets</li>
                  <li>Standard Electrical</li>
                </ul>
              </li>
              <li>Circuit Protection</li>
              <li>Connectors</li>
              <li>Electromechanical</li>
              <li>Embedded Solutions</li>
              <li>Engineering Development Tools</li>
              <li>Industrial Automation</li>
              <li>LED Lighting</li>
              <li>Optoelectronics</li>
              <li>Passive Components</li>
              <li>Power</li>
              <li>Semiconductors</li>
              <li>Sensors</li>
              <li>Test & Measurement</li>
              <li>Thermal Management</li>
              <li>Tools & Supplies</li>
              <li>Wire & Cable</li>
              <li className="view-all">View All</li>
            </ul>
          </li>
          <li>Manufacturers</li>
          <li>Suppliers</li>
          <li className="dropdown">
            Tools
            <ul className="dropdown-content">
              <li className="dropdown-submenu">BOM</li>
              <li>RFQ</li>
            </ul>
          </li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        <i className="icon-search"></i>
      </div>
      <div className="navbar-third-item">
        <div className="navbar-icons">
          <i className="icon-envelope"></i>
          <i className="icon-cart"></i>
          <span className="cart-count">0</span>
        </div>
        <div className="separater" />
        <div className="navbar-buttons">
          <button className="btn login">Log In</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>
      <div className={`navbar-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Products</li>
          <li>Manufacturers</li>
          <li>Suppliers</li>
          <li>Tools</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
