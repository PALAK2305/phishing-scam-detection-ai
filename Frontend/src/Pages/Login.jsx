import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./app.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Use the name returned from the backend if available
      if (setUser) setUser({ email, name: data.name || email.split('@')[0] });
      navigate('/dashboard');
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Could not connect to server");
  }
};

  return (
    <div className="auth-page">
      <button className="back-link" onClick={() => navigate('/')}>
        ← Back to home
      </button>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <span className="logo-icon">🛡️</span>
            ScamGuard
          </div>
          <h1>Welcome back!</h1>
          <p>Log in to continue protecting yourself</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Log In →
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?{' '}
          <Link to="/signup">Sign up free</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;