import React from "react";

export default function App() {
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account Created Successfully 🚀 Redirecting to Login");
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>Scam Detection Alert</h2>
      </div>

      {/* Signup Card */}
      <div style={styles.signupWrapper}>
        <div style={styles.card}>
          <h2 style={styles.title}>Create Account</h2>
          <p style={styles.subtitle}>
            Join our AI-powered Scam Detection Platform
          </p>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              required
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Password"
              required
              style={styles.input}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              required
              style={styles.input}
            />

            <button type="submit" style={styles.signupBtn}>
              Sign Up
            </button>
          </form>

          <p style={styles.footerText}>
            Already have an account?{" "}
            <span style={styles.link}>Login</span>
          </p>
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
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    display: "flex",
    flexDirection: "column"
  },
  navbar: {
    padding: "15px 30px",
    background: "rgba(0,0,0,0.3)"
  },
  logo: {
    margin: 0
  },
  signupWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    background: "#ffffff",
    color: "#203a43",
    padding: "35px",
    width: "360px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
  },
  title: {
    marginBottom: "5px"
  },
  subtitle: {
    fontSize: "14px",
    color: "gray",
    marginBottom: "25px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  signupBtn: {
    width: "100%",
    padding: "10px",
    background: "#00e6e6",
    color: "#003333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold"
  },
  footerText: {
    marginTop: "15px",
    fontSize: "13px"
  },
  link: {
    color: "#00b3b3",
    fontWeight: "bold",
    cursor: "pointer"
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    fontSize: "13px",
    background: "rgba(0,0,0,0.4)"
  }
};
