import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for sidebar navigation
import "../Pages/app.css";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const checkScam = () => {
    if (!message.trim()) {
      alert("Please paste a message to analyze");
      return;
    }

    // Temporary demo logic
    setResult("⚠️ Scam Detected (Confidence: 92%)");
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo"><span className="logo-icon">🛡️</span> ScamGuard</div>
        </div>
        <nav className="sidebar-nav">
          <button className="nav-item active" onClick={() => navigate('/dashboard')}>
            <span className="nav-item-icon">🔍</span> Analyzer
          </button>
          <button className="nav-item" onClick={() => navigate('/history')}>
            <span className="nav-item-icon">📜</span> History
          </button>
          <button className="nav-item" onClick={() => navigate('/account')}>
            <span className="nav-item-icon">👤</span> Account
          </button>
        </nav>
        <div className="sidebar-footer">
           <button className="nav-item" onClick={() => navigate('/')}>🚪 Logout</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="page-header">
          <h1>Scam Message Analyzer</h1>
          <p>Paste any SMS, Email, or message to detect scams instantly.</p>
        </div>

        <div className="analyzer-container">
          {/* Input Card */}
          <div className="analyzer-card">
            <h2><span className="feature-icon purple">📝</span> Analyze Text</h2>
            
            <textarea
              className="message-input"
              placeholder="Paste suspicious message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="analyzer-actions">
              <button className="btn btn-primary" onClick={checkScam}>
                Check Scam
              </button>
              <button className="btn btn-outline" onClick={() => setMessage('')}>
                Clear
              </button>
            </div>
          </div>

          {/* Result Card - Only shows when result exists */}
          {result && (
            <div className="result-card">
              <div className="result-header">
                <div className={`result-icon ${result.includes("Scam") ? "scam" : "safe"}`}>
                  {result.includes("Scam") ? "✕" : "✓"}
                </div>
                <div className="result-title">
                  <h3>Analysis Complete</h3>
                  <p>Here is what our AI found:</p>
                </div>
              </div>
              
              <div className="result-explanation">
                <h4>{result}</h4>
                <p>
                  This message shows high-risk patterns often associated with phishing attempts. 
                  Do not click links or reply.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;