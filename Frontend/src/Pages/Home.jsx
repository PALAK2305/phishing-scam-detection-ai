import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>Scam Detection Alert</h2>
        <button style={styles.loginBtn}>Login</button>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heading}>
          Protect Yourself from <span style={{ color: "#ff4d4d" }}>Online Scams</span>
        </h1>
        <p style={styles.text}>
          Detect phishing links, scam messages, and fraudulent websites using
          AI-powered analysis in real time.
        </p>
        <button style={styles.scanBtn}>Scan Now</button>
      </div>

      {/* Features Section */}
      <div style={styles.features}>
        <div style={styles.card}>
          <h3>🔍 Link Scanner</h3>
          <p>Detect malicious URLs and phishing websites instantly.</p>
        </div>

        <div style={styles.card}>
          <h3>📩 Message Analysis</h3>
          <p>Analyze SMS, emails, and WhatsApp messages for scams.</p>
        </div>

        <div style={styles.card}>
          <h3>🤖 AI Risk Score</h3>
          <p>Get scam probability with AI-based risk assessment.</p>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © 2026 Scam Detection Alert | Stay Safe Online
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    alignItems: "center",
    background: "rgba(0,0,0,0.3)"
  },
  logo: {
    margin: 0
  },
  loginBtn: {
    padding: "8px 18px",
    borderRadius: "5px",
    border: "none",
    background: "#ff4d4d",
    color: "white",
    cursor: "pointer"
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },
  heading: {
    fontSize: "38px",
    marginBottom: "20px"
  },
  text: {
    fontSize: "16px",
    maxWidth: "600px",
    margin: "0 auto 30px"
  },
  scanBtn: {
    padding: "12px 30px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    background: "#00e6e6",
    color: "#003333",
    cursor: "pointer",
    fontWeight: "bold"
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px 20px",
    flexWrap: "wrap"
  },
  card: {
    background: "white",
    color: "#203a43",
    padding: "20px",
    borderRadius: "10px",
    width: "260px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    fontSize: "13px",
    background: "rgba(0,0,0,0.4)"
  }
};
