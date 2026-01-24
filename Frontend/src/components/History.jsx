import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Pages/app.css"; // Ensure this path matches your file structure

const History = ({ history = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo"><span className="logo-icon">🛡️</span> ScamGuard</div>
        </div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => navigate('/dashboard')}>
            <span className="nav-item-icon">🔍</span> Analyzer
          </button>
          <button className="nav-item active" onClick={() => navigate('/history')}>
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

      {/* Main Content */}
      <main className="main-content">
        <div className="analyzer-container"> {/* Container restricts width for readability */}
          
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
                    <div className="date">{item.date}</div>
                    <span className={`badge ${item.status}`}>
                      {item.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default History;