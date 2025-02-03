// src/Feedback.js
import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = () => {
        if (rating > 0 && feedback.trim() !== '') {
            console.log('Rating:', rating, 'Feedback:', feedback);
            submitFeedback(rating, feedback);
        } else {
            alert('Please provide a rating and feedback.');
        }
    };

    const submitFeedback = async (rating, feedback) => {
        try {
            const response = await fetch('/submit-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rating: rating,
                    feedback: feedback,
                }),
            });
            const data = await response.json();
            console.log('Success:', data);
            alert('Feedback submitted successfully');
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting feedback');
        }
    };

    return (
        <div className="feedback-container">
            <h2>Share Your Feedback</h2>
            <div className="rating">
                {[1, 2, 3, 4, 5].map((value) => (
                    <span
                        key={value}
                        className={`star ${value <= rating ? 'selected' : ''}`}
                        onClick={() => handleRating(value)}
                    >
                        &#9733;
                    </span>
                ))}
            </div>
            <textarea
                placeholder="Enter your feedback here"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button className="send-btn" onClick={handleSubmit}>
                Send
            </button>
        </div>
    );
};

export default Feedback;
