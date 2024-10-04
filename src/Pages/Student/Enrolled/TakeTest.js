import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './TakeTest.css';

const TakeTest = () => {

  const links = [
		{path: "/StudentDashboards", pathName:"Home"},
		{path: "/Classes", pathName:"Active Classes"},
		{path: "/PanelEnrolled", pathName:"Enrolled Class"},
		{path: "/ScheduledTests", pathName:"Scheduled Test"},
		{path: "/StudentProfile", pathName:"Student Profile"},
	]
  
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    { id: 1, question: "In this configuration, users can upload files to an FTP server, but they cannot view or download the contents.", options: ["Blind FTP", "Secret FTP", "Secured FTP", "TFTP"] },
    { id: 2, question: "What type of attack includes sending numerous ICMP reply packets?", options: ["Fraggle", "Smurf", "Syn flood", "Teardrop"] },
    { id: 3, question: "This is a fictitious environment that serves as bait for hackers to waste time and resources.", options: ["DMZ", "Honey pot", "Honey suckle", "Internet content filter"] },
    { id: 4, question: "This intrusion detection system looks at the host system's audit trails and log files.", options: ["NIDS", "NIPS", "HIDS", "KIDS"] },
    { id: 5, question: "Which type of cabling allows for the greatest protection against compromising emanations and eavesdropping?", options: ["Shielded twisted pair (STP)", "Coax", "Wireless", "Fibre optic"] },
  ];

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishTest = () => {
    navigate('/TestResults', { state: { answers, questions } });
  };

  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <div className="take-test-page">
      <Sidebar links={links}/>
      <div className="take-test-content">
        <h1 className="test-title">Comptia S+ Domain 2 Test</h1>
        <form className="test-form">
          <div className="question-block">
            <h3 className="question-text">{currentQuestion.question}</h3>
            <div className="options">
              {currentQuestion.options.map((option, idx) => (
                <div key={idx} className="option">
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={answers[currentQuestion.id] === option}
                    onChange={() => handleOptionChange(currentQuestion.id, option)}
                    className="radio-input"
                  />
                  <label className="radio-label">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="navigation-buttons">
            <button
              type="button"
              className="nav-button"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                type="button"
                className="nav-button"
                onClick={handleNextQuestion}
                disabled={!answers[currentQuestion.id]}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="finish-test-button"
                onClick={handleFinishTest}
                disabled={!answers[currentQuestion.id]}
              >
                Finish Test
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TakeTest;
