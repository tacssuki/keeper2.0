import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./App/Footer";

export default function Register() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match, please try again!");
      return;
    }
    console.log(
      `Creating account with email: ${email} and password: ${password}`
    );
    navigate("/app");
  };

  return (
    <div className={darkMode ? "home register dark-mode" : "home register"}>
      <form onSubmit={handleRegistration}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputRegister"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputRegister"
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="inputRegister"
          />
        </label>
        <br />
        <input type="submit" value="Register" className="regbtn register-btn" />
      </form>
      <Footer />
    </div>
  );
}
