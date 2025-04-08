import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';
import Footer from "./footer";
import Menu from "./Menu";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false); // ✅ New state for popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setSuccess(true); // ✅ Show popup

    // Redirect after 1.5 seconds
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="signup-page">
      <Menu />
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <p className="redirect">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>

        {/* ✅ Success popup */}
        {success && (
          <div className="popup">
            <p>Signup Successful!</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Signup;
