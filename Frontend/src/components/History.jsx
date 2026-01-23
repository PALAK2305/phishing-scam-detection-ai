import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <div className="page-header">
        <h1>Analysis History</h1>
        <p>View all your previously analyzed messages</p>
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <h3>No history yet</h3>
          <p>Messages you analyze will appear here</p>
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
                  {item.status === 'safe' && 'Safe'}
                  {item.status === 'scam' && 'Scam'}
                  {item.status === 'warning' && 'Warning'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
