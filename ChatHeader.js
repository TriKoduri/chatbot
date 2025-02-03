import React from 'react';
import botAvatar from './botAvatar.png'; 
const ChatHeader = () => (
  <div className="chat-header">
    <img src={botAvatar} alt="Samantha Jameson" className="chat-avatar" />
    <div className="chat-name">Ava</div>
  </div>
);

export default ChatHeader;
