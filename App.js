import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ChatHeader from './ChatHeader';
import ChatBox from './Chatbox';
import ChatInput from './ChatInput';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello, welcome to chat support! How can I help you today?' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);
  const navigate = useNavigate();  // Initialize navigate function

  const predefinedResponses = {
    hi: 'Hello',
    hello: 'Hi there! How can I assist you today?',
    help: 'Sure, I am here to help. What do you need assistance with?',
    bye: 'Goodbye! Have a nice day!',
    'what is your name': 'I am Ava, your virtual assistant.',
    'how are you': 'I am just a bot, but I am here to help you!',
    'what can you do': 'I can assist you with general inquiries and support.',
    thanks: 'You are welcome!',
    'thank you': 'You are welcome!',
    'what time is it': `The current time is ${new Date().toLocaleTimeString()}.`,
    'tell me a joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'what is your favorite color': 'I love the color blue, like the sky on a clear day!',
    'who created you': 'I was created by team Code Crusaders.',
    'what is your purpose': 'My purpose is to assist users with their inquiries and provide support.',
    'how can i reset my password': 'To reset your password, click on "Forgot Password" on the login page and follow the instructions.',
    'can you help me': 'Of course! What do you need help with?',
    'where are you from': 'I am a virtual assistant, so I exist in the digital world.',
    'what is your favourite song': 'I like Sooseki from Pushpa 2',
    'how old are you': 'I don’t have an age, but I was created to assist you!',
    'what languages do you speak': 'I can understand and respond in multiple languages, primarily English & Telugu.',
    'tell me a fun fact': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.',
    'how do i contact support': 'You can contact support by emailing support@example.com or calling 1-800-123-4567.',
    'what is the weather like': 'I cannot check the weather for you, but you can use a weather app or website for the latest updates.',
    'give me a quote': 'Sure! "The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt',
    'what is the meaning of life': 'The meaning of life is a philosophical question that has been pondered for centuries. What does it mean to you?',
  };

  const sendMessage = (text) => {
    if (text.trim() === '') return;

    setMessages([...messages, { sender: 'user', text }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = predefinedResponses[text.toLowerCase()] || 'I am sorry, I do not understand that.';
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: response },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to navigate to feedback page when "End Chat" is clicked
  const handleEndChat = () => {
    navigate('/feedback');
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatBox messages={messages} isTyping={isTyping} chatBoxRef={chatBoxRef} />
      <ChatInput sendMessage={sendMessage} />
      
      {/* End Chat Button */}
      <button className="end-chat-btn" onClick={handleEndChat}>
        End Chat
      </button>
    </div>
  );
}

export default App;
