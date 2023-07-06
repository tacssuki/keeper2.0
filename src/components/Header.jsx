import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <header className={darkMode ? "dark-mode" : ""}>
      <h1>Keeper</h1>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;