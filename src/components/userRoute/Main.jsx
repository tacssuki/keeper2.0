import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Register from "./Register";
import HomePage from "../WelcomePage";

function Main() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
