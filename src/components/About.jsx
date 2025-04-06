import React from "react";
import Menu from "./Menu";
import Footer from "./footer";
import './About.css';
import img from '../assets/img1.png';
import img2 from '../assets/img2.webp';
const About = () =>{
    return (
        <section className="about-us">
        <Menu/>
          <h3>What We Are Doing</h3>
          <h2>We Are In A Mission To Help The Helpless</h2>
          <div className="card-container">
            <div className="card card-white">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Clean Water</h3>
              <p className="card-text">The sea freight service has grown considerably in recent years. We spend time getting to know your processes.</p>
            </div>
            <div className="card card-green">
              <div className="card-icon">🧠</div>
              <h3 className="card-title">Clean Water</h3>
              <p className="card-text">The sea freight service has grown considerably in recent years. We spend time getting to know your processes.</p>
            </div>
            <div className="card card-white">
              <div className="card-icon">⚙️</div>
              <h3 className="card-title">Clean Water</h3>
              <p className="card-text">The sea freight service has grown considerably in recent years. We spend time getting to know your processes.</p>
            </div>
          </div>
          {/* Another Card Section */}
          <div className="about-mission">
                <h3>About Our Foundation</h3>
                <h2>We Are In A Mission To Help The Helpless</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, mod tempor
                            incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.
                        </p>
                        <p>Lorem ipsum dolor sit amext, consectetur adipisicing elit, smod tempor incididunt ut labore et dolore.</p>
                        <button className="about-button">About US</button>
                    </div>
                    <div className="about-images">
                    <img src={img} alt={img} height={'120px'} width={'80%'}></img>
                    <img src={img2} alt={img} height={'120px'} width={'80%'}></img>
                    </div>
                </div>
            </div>
            <div className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h2>Let's Change The World With Humanity</h2>
                    </div>
                    <div className="hero-button">
                        <button className="volunteer-button">Become A Volunteer</button>
                    </div>
                </div>
            </div>
            {/* section */}
            <div className="testimonial-section">
                <div className="testimonial-card">
                <div className="testimonial-image">
                <img src={img} alt={img} height={'80px'} width={'80%'}></img>
                </div>
                    <h3 className="testimonial-name">Margaret Lawson</h3>
                    <p className="testimonial-role">Creative Director</p>
                    <blockquote className="testimonial-quote">
                        "I am at an age where I just want to be fit and healthy our bodies are our responsibility! 
                        So start caring for your body and it will care for you. Eat clean it will care for you and workout hard."
                    </blockquote>
                </div>
            </div>
            <Footer/>
        </section>
      );
    };
    

export default About
