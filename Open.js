import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Open.css';
import chatIcon from './chat-icon.png';
import aiImage from './ai-image.png';

function Open() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/chatform');
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1>CHATBOT UI DESIGN</h1>
        <div className="online-status">
          <p>We're Online!<br />How may I help you today?</p>
        </div>
        <div className="chat-icon">
          <img src={chatIcon} alt="Chat Icon" />
        </div>
        <button className="register-button" onClick={handleRegister}>Register</button>
      </div>
      <div className="chat-window">
        <div className="header">
          <img src={aiImage} alt="AI" className="ai-image" />
          <h2>Code Crusaders</h2>
          <button className="close-button">X</button>
        </div>
        <div className="chat-box">
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default Open;
