import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
    <div className="login">
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
      <p
        onClick={() =>
          alert("Reset password functionality not implemented yet.")
        }
      >
        Forgot Password
      </p>
      <p onClick={signInAsGuest}>Sign in as Guest</p>
    </div>
  );
}
