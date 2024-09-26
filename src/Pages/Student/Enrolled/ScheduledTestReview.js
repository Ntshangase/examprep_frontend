import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EnrolledStudentSidebar from '../../../Components/Sidebar/EnrolledStudentSidebar';
import './ScheduledTestReview.css';

const ScheduledTestReview = () => {
  const { state } = useLocation();
  const { answers, questions, correctAnswers } = state;
  const navigate = useNavigate();

  const handleBackToTests = () => {
    navigate('/ScheduledTests');
  };

  const isCorrectAnswer = (questionId) => {
    return answers[questionId] === correctAnswers[questionId];
  };

  return (
    <div className="test-review-page">
      <EnrolledStudentSidebar />
      <div className="test-review-content">
        <h1>Review Answers</h1>
        {questions.map((q) => {
          const correct = isCorrectAnswer(q.id);
          return (
            <div
              key={q.id}
              className={`review-block ${correct ? 'correct-answer' : 'incorrect-answer'}`}
            >
              <h3>{q.question}</h3>
              <p>
                Your answer: <strong>{answers[q.id]}</strong> <br />
                {!correct && (
                  <span>
                    Correct answer: <strong>{correctAnswers[q.id]}</strong>
                  </span>
                )}
              </p>
            </div>
          );
        })}
        <button onClick={handleBackToTests}>Back to Scheduled Tests</button>
      </div>
    </div>
  );
};

export default ScheduledTestReview;
