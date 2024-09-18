import React from 'react';
import './QuestionView.css'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const QuestionView = () => {
  // Example data
  const dumpDetails = {
    name: 'CompTIA A+ Core Exam',
    version: '1.0.0',
  };
 

  const questions = [
    {
      id: 1,
      question: 'What is the function of a CPU?',
      options: ['Process data', 'Store data', 'Transmit data', 'Encrypt data'],
    },
    {
      id: 2,
      question: 'What does RAM stand for?',
      options: ['Random Access Memory', 'Read Access Memory', 'Rapid Access Memory', 'Run Access Memory'],
    },
    {
      id: 3,
      question: 'Which component stores data long-term?',
      options: ['SSD', 'RAM', 'Cache', 'CPU'],
    },
  ];

  <div className="sidebar">
  <h3>Student</h3>
  <ul>
    <li>Profile</li>
    <li>View Dumps</li>
    <li>Logout</li>
  </ul>
</div>
  return (
    <div className="question-view-container">

      {/* Dump Details */}
      <div className="dump-details">
        <h2>{dumpDetails.name}</h2>
        <p>Version: {dumpDetails.version}</p>
      </div>

      {/* Questions Section */}
      <div className="questions-section">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <div className="question-header">
              <p>{question.question}</p>
              <button className="edit-btn">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
            <div className="options-list">
              {question.options.map((option, index) => (
                <div key={index} className="option">
                  <input type="radio" name={`question_${question.id}`} value={option} disabled />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionView;