import React from "react";
import "./App.css";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">🛡️ Scam Detection Alert</div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>
          Detect <span style={{ color: "#ff4d4d" }}>Scams & Phishing</span> Before
          They Harm You
        </h1>
        <p>
          An AI-powered system to analyze links, messages, and files for scams,
          phishing attacks, and online fraud in real time.
        </p>
        <button className="btn-scan">Scan Now</button>
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature-card">
          <h3>🔗 URL Phishing Detection</h3>
          <p>
            Scan suspicious links to identify phishing websites and fake domains
            instantly.
          </p>
        </div>

        <div className="feature-card">
          <h3>📩 Message Scam Analysis</h3>
          <p>
            Analyze SMS, emails, and WhatsApp messages to detect scam patterns.
          </p>
        </div>

        <div className="feature-card">
          <h3>📁 File Safety Check</h3>
          <p>
            Upload files to detect malicious content and hidden phishing threats.
          </p>
        </div>

        <div className="feature-card">
          <h3>🤖 AI Risk Score</h3>
          <p>
            Get a clear risk score that explains how dangerous the content is.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        © 2026 Scam Detection Alert | Protecting Users from Online Fraud
      </div>
    </>
  );
};

export default Home;

