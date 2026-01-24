import React from 'react';
import "../Pages/app.css";
const Account = ({ user, history, onLogout }) => {
  const safeCount = history.filter(h => h.status === 'safe').length;
  const scamCount = history.filter(h => h.status === 'scam').length;
  const totalCount = history.length;

  return (
    <div>
      <div className="page-header">
        <h1>My Account</h1>
        <p>Manage your profile and view your stats</p>
      </div>

      <div className="account-grid">
        <div className="account-card">
          <h3>👤 Profile Information</h3>
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="profile-info">
              <h4>{user?.name || 'User'}</h4>
              <p>Free Plan</p>
            </div>
          </div>
          <ul className="info-list">
            <li className="info-item">
              <label>Email</label>
              <span>{user?.email || 'user@example.com'}</span>
            </li>
            <li className="info-item">
              <label>Member since</label>
              <span>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </li>
            <li className="info-item">
              <label>Account status</label>
              <span style={{ color: '#38ef7d' }}>Active ✓</span>
            </li>
          </ul>
        </div>

        <div className="account-card">
          <h3>📊 Your Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number total">{totalCount}</div>
              <div className="stat-label">Total Scans</div>
            </div>
            <div className="stat-item">
              <div className="stat-number safe">{safeCount}</div>
              <div className="stat-label">Safe Messages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number scam">{scamCount}</div>
              <div className="stat-label">Scams Detected</div>
            </div>
          </div>
        </div>

        <div className="account-card">
          <h3>⚙️ Preferences</h3>
          <ul className="info-list">
            <li className="info-item">
              <label>Email notifications</label>
              <span>Enabled</span>
            </li>
            <li className="info-item">
              <label>Save history</label>
              <span>Enabled</span>
            </li>
            <li className="info-item">
              <label>Language</label>
              <span>English</span>
            </li>
          </ul>
        </div>

        <div className="account-card danger-zone">
          <h3>⚠️ Danger Zone</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Careful! These actions cannot be undone.
          </p>
          <button className="btn btn-outline" style={{ marginBottom: '12px', width: '100%' }}>
            Export My Data
          </button>
          <button 
            className="btn btn-danger" 
            style={{ width: '100%' }}
            onClick={onLogout}
          >
            🚪 Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
