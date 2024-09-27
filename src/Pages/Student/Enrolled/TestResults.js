import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EnrolledStudentSidebar from '../../../Components/Sidebar/EnrolledStudentSidebar';
import './TestResults.css';

const TestResults = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { answers, questions } = state;

  const correctAnswers = {
    1: "Blind FTP",
    2: "Smurf",
    3: "Honey pot",
    4: "HIDS",
    5: "Fibre optic",
  };

  const score = Object.keys(answers).reduce((acc, questionId) => {
    return answers[questionId] === correctAnswers[questionId] ? acc + 1 : acc;
  }, 0);

  const handleNext = () => {
    navigate('/ScheduledTestReview', { state: { answers, questions, correctAnswers } });
  };

  return (
    <div className="test-results-page">
      <EnrolledStudentSidebar />
      <div className="test-results-content">
        <h1>Domain 2 Test Result</h1>
        <h1>Your Score: {score}/{questions.length}</h1>
        <button className='test-result-button' onClick={handleNext}>Next: Review Answers</button>
      </div>
    </div>
  );
};

export default TestResults;
