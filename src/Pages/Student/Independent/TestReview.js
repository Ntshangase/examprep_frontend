import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './TestReview.css';

const TestReview = () => {
    const location = useLocation();
    const { reviewResults, examResults } = location.state || {};

    if (!reviewResults) {
        return <p>No review data available. Please take the test first.</p>;
    }

    return (
        <div className="review-dashboard">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <div className="content-area">
                    <h1>Test Review</h1>
                    <h2>Results Summary</h2>
                    <p><strong>User:</strong> {examResults.user}</p>
                    <p><strong>Total Questions:</strong> {examResults.totalQuestions}</p>
                    <p><strong>Marks:</strong> {examResults.marks}</p>
                    <p><strong>Time Taken:</strong> {examResults.timeTaken}</p>
                    <p><strong>Date Taken:</strong> {examResults.dateTaken}</p>
                    <h2>Question Review</h2>
                    <ul>
                        {reviewResults.map((result, index) => (
                            <li key={index} className="question-review">
                                <h3>{result.question}</h3>
                                <p className={result.isCorrect ? 'correct' : 'wrong'}>
                                    <strong>Your Answer:</strong> {result.userAnswer}
                                </p>
                                <p className={result.isCorrect ? 'correct' : 'wrong'}>
                                    <strong>Correct Answer:</strong> {result.correctAnswer}
                                </p>
                                <p><strong>Explanation:</strong> {result.explanation}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TestReview;
