import React from 'react';
import './QuestionView.css'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import hooks for routing
import Sidebar from '../../Components/Sidebar/Sidebar';

const QuestionView = () => {

  const links = [
		{path: "/ModeratorDashboard", pathName: "Home"},
		{path: "/QuestionView", pathName: "Questions"}
	]

  const ModerateQuestion = () => {
		navigate("/ModerateQuestion");
	};
  // const dumpDetails = {
  //   name: 'CompTIA A+ Core Exam',
  //   version: '1.0.0',
  // };

  const navigate = useNavigate(); // Initialize navigate

  const questions = [
    {
      id: 1,
      question: 'Which of the following ports is typically used by HTTPS?',
      options: ['80', '443', '21', '110'],
    },
    {
      id: 3,
      question: 'Which of the following devices can provide power protection for computer hardware?',
      options: ['Surge suppressor', 'Power strip', 'Uninterruptible power supply', 'AC adapter'],
    },
    {
      id: 5,
      question: 'Which of the following is the correct IP range for a Class C address?',
      options: ['192.0.0.0 - 223.255.255.255', '128.0.0.0 - 191.255.255.255', '0.0.0.0 - 127.255.255.255', '224.0.0.0 - 239.255.255.255'],
    }
  ];

  return (
    <div className="question-view-container">
        <Sidebar links={links}/>
        <div className="dashboard-content">
          <div className="content-area">

            {/* Dump Details */}
            <div className="dump-details">
              <h2>Aws Cloud Practisioner</h2>

            </div>

            {/* Search Input */}
            <div className="question-view-search-container">
              <label htmlFor="search-input" className="search-label">
                Search by Question ID:
              </label>
              <input
                id="search-input"
                type="text"
                className="search-input"
                placeholder="Enter Course ID"
              />
            </div>

            {/* Questions Section */}
            <div className="questions-section">
              {questions.map((question) => (
                <div key={question.id} className="question-card">
                  <div className="question-header">
                    <p>{question.question}</p>
                    <button onClick={ModerateQuestion} className="edit-btn">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </div>
                  <div className="options-list">
                    {question.options.map((option, index) => (
                      <div key={index} className="option">
                        {/* <input type="radio" name={`question_${question.id}`} value={option} disabled /> */}
                        <label>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Back and Done Buttons Container */}
            <div className="button-container">
              <button onClick={() => navigate("/ModeratorDashboard")} className="back-btn">
                <FontAwesomeIcon icon={faArrowLeftLong} /> Back
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default QuestionView;
