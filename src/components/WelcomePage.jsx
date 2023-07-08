import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function WelcomePage() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div className={darkMode ? "home login dark-mode" : "home login"}>
      <div className="home">
        <h1 style={{ color: "#f5b913" }}>Welcome to Keeper App</h1>
        <div className="home-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
