import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are dedicated to reducing food waste and distributing surplus food to those in need. Join our mission today!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: contact@ngofood.org</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 123 Food Street, City</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} NGO Waste Food Management | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
