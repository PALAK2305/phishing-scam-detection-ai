import React, { useState } from 'react';

const Dashboard = ({ onAddHistory }) => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeMessage = () => {
    if (!message.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);

    // Simulated analysis - in real app would call AI backend
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();
      let analysisResult;

      // Simple keyword-based mock analysis
      const scamKeywords = ['urgent', 'click here', 'verify your account', 'suspended', 'won', 'prize', 'lottery', 'bitcoin', 'wire transfer', 'gift card', 'act now', 'limited time'];
      const warningKeywords = ['password', 'login', 'confirm', 'update', 'security', 'bank', 'payment'];
      
      const hasScamKeyword = scamKeywords.some(keyword => lowerMessage.includes(keyword));
      const hasWarningKeyword = warningKeywords.some(keyword => lowerMessage.includes(keyword));

      if (hasScamKeyword) {
        analysisResult = {
          status: 'scam',
          title: 'High Risk - Likely Scam!',
          subtitle: 'This message contains multiple red flags',
          explanation: 'Our AI has detected several indicators commonly found in scam messages:',
          indicators: [
            'Uses urgent language to pressure quick action',
            'Contains suspicious links or requests',
            'Asks for sensitive personal information',
            'Promises unrealistic rewards or threatens consequences'
          ]
        };
      } else if (hasWarningKeyword) {
        analysisResult = {
          status: 'warning',
          title: 'Medium Risk - Use Caution',
          subtitle: 'Some elements require attention',
          explanation: 'This message has some elements that warrant caution:',
          indicators: [
            'References account security or verification',
            'May be legitimate but verify sender directly',
            'Do not click links - visit official website instead',
            'Contact the company through official channels'
          ]
        };
      } else {
        analysisResult = {
          status: 'safe',
          title: 'Low Risk - Appears Safe',
          subtitle: 'No obvious scam indicators detected',
          explanation: 'Our analysis did not find common scam patterns:',
          indicators: [
            'No urgent or threatening language detected',
            'No suspicious links or requests found',
            'Message appears to be legitimate communication',
            'Still exercise general caution with unknown senders'
          ]
        };
      }

      setResult(analysisResult);
      setIsAnalyzing(false);

      // Add to history
      onAddHistory({
        id: Date.now(),
        message: message.substring(0, 150) + (message.length > 150 ? '...' : ''),
        status: analysisResult.status,
        title: analysisResult.title,
        date: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      });
    }, 1500);
  };

  const clearInput = () => {
    setMessage('');
    setResult(null);
  };

  return (
    <div className="analyzer-container">
      <div className="page-header">
        <h1>Message Analyzer</h1>
        <p>Paste any suspicious message below to check if it's a scam</p>
      </div>

      <div className="analyzer-card">
        <h2>📝 Enter Message</h2>
        <textarea
          className="message-input"
          placeholder="Paste your SMS, email, or any suspicious message here...

Example: 'URGENT! Your bank account has been suspended. Click here to verify your identity immediately or your account will be closed.'"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="analyzer-actions">
          <button 
            className="btn btn-outline" 
            onClick={clearInput}
            disabled={!message && !result}
          >
            Clear
          </button>
          <button 
            className="btn btn-primary" 
            onClick={analyzeMessage}
            disabled={!message.trim() || isAnalyzing}
          >
            {isAnalyzing ? (
              <span className="loading-spinner">
                <span className="spinner"></span>
                Analyzing...
              </span>
            ) : (
              '🔍 Analyze Message'
            )}
          </button>
        </div>
      </div>

      {result && (
        <div className="result-card">
          <div className="result-header">
            <div className={`result-icon ${result.status}`}>
              {result.status === 'safe' && '✓'}
              {result.status === 'scam' && '✕'}
              {result.status === 'warning' && '⚠'}
            </div>
            <div className="result-title">
              <h3>{result.title}</h3>
              <p>{result.subtitle}</p>
            </div>
          </div>
          <div className="result-explanation">
            <h4>{result.explanation}</h4>
            <ul>
              {result.indicators.map((indicator, index) => (
                <li key={index}>{indicator}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
