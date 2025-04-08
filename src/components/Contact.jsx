import React from "react";
import "./Contact.css";
import Menu from "./Menu";
import Footer from "./footer";

const Contact = () => {
  return (
    <>
      <Menu />
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Get in Touch</h2>
          <form className="contact-form">
            <textarea placeholder="Enter Message" rows="6" />
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

      {/* ✅ Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.111742092209!2d-122.4194154846845!3d37.77492977975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d5b6e55%3A0x36a0b06c9dca0c6a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617723439202!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
