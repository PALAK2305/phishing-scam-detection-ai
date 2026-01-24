import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Pages/app.css";

const Dashboard = ({ onAddHistory }) => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const analyzeMessage = async () => {
    if (!message.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    try {
      // Points to the standardized endpoint in app.py
      const response = await fetch("http://127.0.0.1:5000/api/analyze-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: message }),
      });

      const data = await response.json();

      if (response.ok) {
        const isSpam = data.result === "Spam";

        const analysisResult = {
          status: isSpam ? 'scam' : 'safe',
          title: isSpam ? 'High Risk - Likely Scam!' : 'Low Risk - Appears Safe',
          subtitle: isSpam ? 'Our AI model detected scam patterns.' : 'No obvious scam indicators found.',
          indicators: isSpam
            ? ['Machine Learning detected scam intent', 'Suspicious language patterns']
            : ['Legitimate pattern', 'Safe text structure']
        };

        setResult(analysisResult);

        if (onAddHistory) {
          onAddHistory({
            id: Date.now(),
            message: message.substring(0, 100) + '...',
            status: analysisResult.status,
            title: analysisResult.title,
            date: new Date().toLocaleDateString()
          });
        }
      } else {
        alert("Server Error: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Could not connect to the ScamGuard API. Make sure app.py is running!");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo">🛡️ ScamGuard</div>
        <nav className="sidebar-nav">
          <button className="nav-item active" onClick={() => navigate('/dashboard')}>🔍 Analyzer</button>
          <button className="nav-item" onClick={() => navigate('/history')}>📜 History</button>
          <button className="nav-item" onClick={() => navigate('/account')}>👤 Account</button>
          <button className="nav-item logout" onClick={() => navigate('/')}>🚪 Logout</button>
        </nav>
      </aside>

      <main className="analyzer-container">
        <div className="page-header">
          <h1>Message Analyzer</h1>
          <p>Paste a suspicious message to check for fraud.</p>
        </div>

        <div className="analyzer-card">
          <textarea
            className="message-input"
            placeholder="Paste message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="analyzer-actions">
            <button className="btn btn-outline" onClick={() => setMessage('')}>Clear</button>
            <button className="btn btn-primary" onClick={analyzeMessage} disabled={isAnalyzing}>
              {isAnalyzing ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </div>

        {result && (
          <div className={`result-card ${result.status}`}>
            <h3>{result.title}</h3>
            <p>{result.subtitle}</p>
            <ul>
              {result.indicators.map((ind, i) => (
                <li key={i}>{ind}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;