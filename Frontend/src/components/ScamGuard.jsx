import React, { useState } from 'react';

function ScamGuard() {
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!inputText) return;
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/analyze-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      setPrediction(data.result); // This matches your "result" key in app.py
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setPrediction("Error: Could not reach server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>ScamGuard Text Analyzer</h2>
      <textarea
        rows="5"
        style={{ width: '100%' }}
        placeholder="Paste text here to check for scams..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Text"}
      </button>

      {prediction && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Result: {prediction}
        </div>
      )}
    </div>
  );
}

export default ScamGuard;