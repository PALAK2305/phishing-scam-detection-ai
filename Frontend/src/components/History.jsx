import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Pages/app.css";

const History = ({ history = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo">🛡️ ScamGuard</div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => navigate('/dashboard')}>🔍 Analyzer</button>
          <button className="nav-item active" onClick={() => navigate('/history')}>📜 History</button>
          <button className="nav-item" onClick={() => navigate('/account')}>👤 Account</button>
          <button className="nav-item logout" onClick={() => navigate('/')}>🚪 Logout</button>
        </nav>
      </aside>

      <main className="analyzer-container">
        <div className="page-header">
          <h1>Analysis History</h1>
          <p>View all your previously analyzed messages</p>
        </div>

        {history.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <h3>No history yet</h3>
            <p>Messages you analyze will appear here</p>
            <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
              Analyze a Message
            </button>
          </div>
        ) : (
          <div className="history-list">
            {history.map((item) => (
              <div key={item.id} className="history-item">
                <div className={`history-status ${item.status}`}>
                  {item.status === 'safe' && '✓'}
                  {item.status === 'scam' && '✕'}
                  {item.status === 'warning' && '⚠'}
                </div>
                <div className="history-content">
                  <h4>{item.title}</h4>
                  <p>{item.message}</p>
                </div>
                <div className="history-meta">
                  <span className="date">{item.date}</span>
                  <span className={`badge ${item.status}`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default History;