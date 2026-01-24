import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './app.css';

const Signup = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      if (setUser) setUser({ email, name });
      navigate('/dashboard');
    } else {
      alert(data.message || "Registration failed");
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("Could not connect to server");
  }
};

  return (
    <div className="auth-page">
      {/* Changed onNavigate to navigate('/') */}
      <button className="back-link" onClick={() => navigate('/')}>
        ← Back to home
      </button>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <span className="logo-icon">🛡️</span>
            ScamGuard
          </div>
          <h1>Create your account</h1>
          <p>Start detecting scams in seconds</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              className="form-input"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account 🚀
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?{' '}
          {/* Replaced <a> tag with <Link> for better performance */}
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;