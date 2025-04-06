import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="menu">
        <div className="container">
          <div className="logo">NGO & Waste Food Management</div>
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
