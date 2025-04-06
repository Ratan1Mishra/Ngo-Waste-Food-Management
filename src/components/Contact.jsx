import React from "react";
import "./Contact.css";
import Menu from "./Menu";
const Contact = () => {
  return (
    <div className="contact-container">
    <Menu />
      <div className="contact-left">
        <h2 className="contact-title">Get in Touch</h2>
        <form className="contact-form">
          <textarea placeholder="Enter Message" rows="10" />
          <div className="contact-row">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Enter Subject" />
          <button type="submit" className="contact-submit">SEND</button>
        </form>
      </div>

      <div className="contact-right">
        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon">🏠</span>
            <div>
              <p><strong>Buttonwood, California.</strong></p>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📱</span>
            <div>
              <p><strong>+1 253 565 2365</strong></p>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <p><strong>support@colorlib.com</strong></p>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
