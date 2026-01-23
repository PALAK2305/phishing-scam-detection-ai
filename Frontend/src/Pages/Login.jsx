import React, { useState } from 'react';

const Login = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - in real app would validate with backend
    if (email && password) {
      onLogin({ email, name: email.split('@')[0] });
    }
  };

  return (
    <div className="auth-page">
      <button className="back-link" onClick={() => onNavigate('landing')}>
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
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('signup'); }}>
            Sign up free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
