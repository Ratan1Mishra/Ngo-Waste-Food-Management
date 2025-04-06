import React from "react";
import Menu from "./Menu";
import Footer from "./footer";
import './Home.css';
import gallery1 from '../assets/img1.png';
import child1 from '../assets/child1.webp';
import child2 from '../assets/child2.webp';
import child3 from '../assets/child3.webp';
import volunteer1 from '../assets/team1.webp';
import volunteer2 from '../assets/team2.webp';
import volunteer3 from '../assets/team3.webp';
import volunteer4 from '../assets/team4.webp';

const causes = [
  {
    title: "Ensure Education For Every Poor Children",
    raised: 20000,
    goal: 35000,
    percentage: 70,
    image: child1,
  },
  {
    title: "Providing Healthy Food For The Children",
    raised: 20000,
    goal: 35000,
    percentage: 25,
    image: child2,
  },
  {
    title: "Supply Drinking Water For The People",
    raised: 20000,
    goal: 35000,
    percentage: 50,
    image: child3,
  },
];

const volunteers = [
  { name: "Bruce Roberts", title: "Volunteer leader", image: volunteer1 },
  { name: "Robart Rechard", title: "Volunteer leader", image: volunteer2 },
  { name: "Brendon Tailor", title: "Volunteer leader", image: volunteer3 },
  { name: "Walshr Hasgt", title: "Volunteer leader", image: volunteer4 },
];

const CauseCard = ({ cause }) => {
  return (
    <div className="cause-card">
      <img src={cause.image} alt={cause.title} className="cause-image" />
      <div className="cause-content">
        <h3 className="cause-title">{cause.title}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${cause.percentage}%` }}></div>
        </div>
        <p className="cause-text">
          Raised: <span>${cause.raised}</span> / Goal: <span>${cause.goal}</span>
        </p>
        <button className="donate-button">Donate Now</button>
      </div>
    </div>
  );
};

const VolunteerCard = ({ volunteer }) => {
  return (
    <div className="vol-horizontal-card">
      <img src={volunteer.image} alt={volunteer.name} className="vol-horizontal-img" />
      <div className="vol-horizontal-content">
        <h3>{volunteer.name}</h3>
        <p>{volunteer.title}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <Menu />
      <div className="home-content-wrapper">
        <div className="home-content">
          <h1 className="home-title">Our Helping To The World.</h1>
          <p className="home-description">
            Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut bore et
            dolore magnt, sed do eiusmod.
          </p>
          <div className="home-actions">
            <button className="home-button">Donate</button>
            <div className="home-contact"> 📞+12 1325 41</div>
          </div>
        </div>
        <div className="home-image-wrapper">
          <img src={gallery1} alt="Gallery 1" className="gallery-item" />
        </div>
      </div>

      <div className="about-us">
        <h3>What We Are Doing</h3>
        <h2>We Are In A Mission To Help The Helpless</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-icon">💧</div>
            <h3 className="card-title">Clean Water</h3>
            <p className="card-text">Providing access to clean and safe drinking water.</p>
          </div>
          <div className="card">
            <div className="card-icon">🍎</div>
            <h3 className="card-title">Healthy Food</h3>
            <p className="card-text">Delivering nutritious meals to underprivileged children.</p>
          </div>
          <div className="card">
            <div className="card-icon">📚</div>
            <h3 className="card-title">Education</h3>
            <p className="card-text">Ensuring quality education for every child.</p>
          </div>
        </div>
      </div>

      <div className="causes-section">
        <div className="about-us">
          <h3>Explore Our Latest Causes</h3>
          <h2>That We Work On</h2>
        </div>
        <div className="cause-cards-container">
          {causes.map((cause, index) => (
            <CauseCard key={index} cause={cause} />
          ))}
        </div>
      </div>

      <div className="events-section">
        <h2 className="events-heading">We Arrange Many Social Events<br />For Charity Donations</h2>

        <div className="event-card">
          <img src={child1} alt="Donation is Hope" className="event-image" />
          <div className="event-content">
            <h3 className="event-title">Donation is Hope</h3>
            <div className="event-details">
              <span>🕗 8:30 - 9:30am</span>
              <span>📅 18.01.2021</span>
              <span>📍 Athens, Greece</span>
            </div>
          </div>
        </div>

        <div className="event-card">
          <img src={child2} alt="A hand for Children" className="event-image" />
          <div className="event-content">
            <h3 className="event-title">A hand for Children</h3>
            <div className="event-details">
              <span>🕗 8:30 - 9:30am</span>
              <span>📅 18.01.2021</span>
              <span>📍 Athens, Greece</span>
            </div>
          </div>
        </div>
      </div>

      <div className="vol-horizontal-section">
        <h3 className="vol-heading">Our Expert Volunteer<br />Always Ready</h3>
        <div className="vol-horizontal-list">
          {volunteers.map((volunteer, index) => (
            <VolunteerCard key={index} volunteer={volunteer} />
          ))}
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
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
