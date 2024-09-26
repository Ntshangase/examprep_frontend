import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IndependentStudentSidebar from '../../../Components/Sidebar/IndependentStudentSidebar';
import './TestReview.css';

const TestReview = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { reviewResults } = location.state || {};
    
    // Modal control state
    const [showModal, setShowModal] = useState(false);

    // Handler for finishing the review
    const handleFinish = () => {
        setShowModal(true);
        // Automatically redirect after 3 seconds
        setTimeout(() => {
            navigate('/StudentDashBoard');
        }, 3000);
    };

    if (!reviewResults) {
        return <p>No review data available. Please take the test first.</p>;
    }

    return (
        <div className="review-dashboard">
           
            <div className="dashboard-content">
                <IndependentStudentSidebar />
                <div className="content-area">
                    <div className="header">
                        <h1>Submitted Answers</h1>
                    </div>
                    <ul className="review-list">
                        {reviewResults.map((result, index) => (
                            <li key={index} className="question-review">
                                <h3>{`QUESTION ${index + 1}`}</h3>
                                <p>{result.question}</p>
                                <div className={result.isCorrect ? 'correct-section' : 'wrong-section'}>
                                    <p><strong>Your Answer:</strong> {result.userAnswer}</p>
                                </div>
                                <div className="correct-answer">
                                    <p><strong>Correct answer:</strong> {result.correctAnswer}</p>
                                    <p><strong>Explanation:</strong> {result.explanation}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleFinish} className="finish-button">Finish</button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Test Review Completed</h2>
                        <p>You will be redirected to the dashboard shortly...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestReview;
