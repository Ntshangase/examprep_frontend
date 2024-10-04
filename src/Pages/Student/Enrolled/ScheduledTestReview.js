import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './ScheduledTestReview.css';

const ScheduledTestReview = () => {

  const links = [
		{path: "/StudentDashboards", pathName:"Home"},
		{path: "/Classes", pathName:"Active Classes"},
		{path: "/PanelEnrolled", pathName:"Enrolled Class"},
		{path: "/ScheduledTests", pathName:"Scheduled Test"},
		{path: "/StudentProfile", pathName:"Student Profile"},
	]
  
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
      <Sidebar links={links}/>
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
        <button className='scheduled-test-review-button' onClick={handleBackToTests}>Back to Scheduled Tests</button>
      </div>
    </div>
  );
};

export default ScheduledTestReview;
