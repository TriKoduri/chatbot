import React from 'react';
import botAvatar from './botAvatar.png'; // Add your bot avatar image here
import userAvatar from './userAvatar.png'; // Add your user avatar image here

const ChatBox = ({ messages, isTyping, chatBoxRef }) => (
  <div className="chat-box" ref={chatBoxRef}>
    {messages.map((msg, index) => (
      <div key={index} className={`chat-message ${msg.sender}-message`}>
        <img src={msg.sender === 'bot' ? botAvatar : userAvatar} alt={`${msg.sender} avatar`} className="chat-avatar" />
        <div className="message-content">{msg.text}</div>
      </div>
    ))}
    {isTyping && (
      <div className="chat-message bot-message">
        <img src={botAvatar} alt="Bot avatar" className="chat-avatar" />
        <div className="typing-indicator">Bot is typing...</div>
      </div>
    )}
  </div>
);

export default ChatBox;
