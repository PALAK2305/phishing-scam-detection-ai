import React from 'react';
import './app.css';
const Landing = ({ onNavigate }) => {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="logo">
          <span className="logo-icon">🛡️</span>
          ScamGuard
        </div>
        <div className="nav-buttons">
          <button className="btn btn-outline" onClick={() => onNavigate('login')}>
            Log In
          </button>
          <button className="btn btn-primary" onClick={() => onNavigate('signup')}>
            Sign Up Free
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-badge">
          🔥 <span>Trusted by 10,000+ users</span> — Stay safe online
        </div>
        <h1 className="hero-title">
          Detect Scams <span className="gradient-text">Instantly</span> with AI
        </h1>
        <p className="hero-subtitle">
          Paste any suspicious SMS, email, or message and get instant analysis. 
          Our AI-powered tool identifies phishing attempts, fraud, and scams in seconds.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => onNavigate('signup')}>
            🚀 Get Started Free
          </button>
          <button className="btn btn-outline" onClick={() => onNavigate('login')}>
            Already have an account?
          </button>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon purple">⚡</div>
            <h3>Instant Analysis</h3>
            <p>Get results in seconds. Our AI scans your message and identifies potential threats immediately.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon blue">🔒</div>
            <h3>100% Private</h3>
            <p>Your messages are encrypted and never stored. We prioritize your privacy above everything else.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon pink">📊</div>
            <h3>Detailed Reports</h3>
            <p>Understand why a message is flagged with detailed explanations and risk indicators.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
