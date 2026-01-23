import React from "react";
import "./App.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful! Redirecting to dashboard...");
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">🛡️ Scam Detection Alert</div>
      </div>

      {/* Login Section */}
      <div className="center-wrapper">
        <div className="card">
          <h2>Secure Login</h2>
          <p className="subtitle">
            Access AI-powered Scam & Phishing Detection
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
