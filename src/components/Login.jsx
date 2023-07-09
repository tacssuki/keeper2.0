import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./App/Footer";

export default function Login() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
    navigate("/app");
  };

  const signInAsGuest = () => {
    navigate("/app");
  };

  return (
    <div className={darkMode ? "home login dark-mode" : "home login"}>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputLogin"
          />
        </label>
        <br /> <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputLogin"
          />
        </label>
        <br /> <br />
        <input type="submit" value="Login" className="logbtn login-btn" />
        <br /> <br />
        <div className="p-onLogin">
          <p
            onClick={() =>
              alert("Reset password functionality not implemented yet.")
            }
          >
            Forgot Password
          </p>
          <p onClick={signInAsGuest}>Sign in as Guest</p>
        </div>
      </form>
      <Footer />
    </div>
  );
}
