import React from "react";
import './app.css';
export default function App() {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>🛡️ Scam Alert</h2>

        <ul style={styles.menu}>
          <li style={styles.item}>🏠 Dashboard</li>
          <li style={styles.item}>🔍 Scan Link</li>
          <li style={styles.item}>📩 Message Scan</li>
          <li style={styles.item}>📊 Risk Reports</li>
          <li style={styles.item}>⚠️ Alerts</li>
          <li style={styles.item}>⚙️ Settings</li>
        </ul>

        <button style={styles.logout}>Logout</button>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1>Welcome to Scam Detection Dashboard</h1>
        <p>
          Monitor, analyze, and protect users from phishing and online scams
          using AI-powered detection.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f5f7fa"
  },
  sidebar: {
    width: "240px",
    background: "linear-gradient(180deg, #0f2027, #203a43)",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  logo: {
    textAlign: "center",
    marginBottom: "30px"
  },
  menu: {
    listStyle: "none",
    padding: 0
  },
  item: {
    padding: "12px 10px",
    marginBottom: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    background: "rgba(255,255,255,0.08)"
  },
  logout: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#ff4d4d",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    padding: "40px",
    color: "#203a43"
  }
};
