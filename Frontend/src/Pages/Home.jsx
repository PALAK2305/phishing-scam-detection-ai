import React from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="logo">
          <span className="logo-icon">🛡️</span> ScamGuard
        </div>
        <div className="nav-buttons">
          <button className="btn btn-outline" onClick={() => navigate('/login')}>
            Log In
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/signup')}>
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Added: Hero Badge defined in your CSS */}
        <div className="hero-badge">
          <span>✨ New v2.0</span> AI-Powered Protection
        </div>

        <h1 className="hero-title">
          Detect Scams <br />
          <span className="gradient-text">Before They Bite</span>
        </h1>
        
        <p className="hero-subtitle">
          Don't get played. Paste any suspicious message, email, or link 
          and get an instant AI safety analysis.
        </p>
        
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => navigate('/signup')}>
            🚀 Analyze Now
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/login')}>
            View Demo
          </button>
        </div>
      </section>

      {/* Added: Features Section defined in your CSS */}
      <section className="features-section">
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon purple">⚡</div>
            <h3>Instant Results</h3>
            <p>Get a safety score in seconds. Our AI analyzes patterns, language, and links instantly.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon blue">🧠</div>
            <h3>Smart Context</h3>
            <p>We don't just say "Scam." We explain exactly <em>why</em> a message looks suspicious.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon pink">🔒</div>
            <h3>Private & Secure</h3>
            <p>Your data is encrypted. We analyze the content without storing your personal details.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;