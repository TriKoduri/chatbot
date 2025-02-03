import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Open from './Open';
import ChatForm from './ChatForm';
import App from './App';
import Feedback from './Feedback';  // Import the Feedback component

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/chatform" element={<ChatForm />} />
        <Route path="/chat" element={<App />} />
        <Route path="/feedback" element={<Feedback />} />  {/* Add the feedback route */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
