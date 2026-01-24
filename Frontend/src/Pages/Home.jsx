import React from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="logo"><span className="logo-icon">🛡️</span> ScamGuard</div>
        <div className="nav-buttons">
          <button className="btn btn-outline" onClick={() => navigate('/login')}>Log In</button>
          <button className="btn btn-primary" onClick={() => navigate('/signup')}>Sign Up Free</button>
        </div>
      </nav>

      <section className="hero-section">
        <h1 className="hero-title">Detect Scams <span className="gradient-text">Instantly</span></h1>
        <p className="hero-subtitle">Paste any suspicious message and get instant AI analysis.</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => navigate('/signup')}>🚀 Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Home;