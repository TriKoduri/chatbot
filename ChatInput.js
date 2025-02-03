import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
      setError('');
    } else {
      setError('Please enter a message');
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          if (error) setError('');
        }}
        placeholder="Type your message"
        className="chat-input"
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="chat-send-button">Send</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ChatInput;
