import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import Footer from "./footer";
import Menu from "./Menu";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // ✅ New state for success popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      setSuccess(true); // ✅ Show success popup
      setError("");

      setTimeout(() => {
        navigate("/home");
      }, 1500); // Wait and redirect
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <Menu />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          {error && <p className="error">{error}</p>}
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
          <button type="submit">Login</button>
          <p className="redirect">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>

        {/* ✅ Success Popup */}
        {success && (
          <div className="popup">
            <p>Thanks for login!</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
