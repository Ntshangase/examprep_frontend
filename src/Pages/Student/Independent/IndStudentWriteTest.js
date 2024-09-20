import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './IndStudentWriteTest.css';

const IndStudentWriteTest = () => {
  const location = useLocation();
  const { selectedTopics } = location.state || {}; // Retrieve the selected topics passed via state

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [examResults, setExamResults] = useState({});

  // Generate a list of questions from the selected topics
  const questions = [];

  if (!selectedTopics) {
    return <p>No questions selected. Please go back and create a test.</p>;
  }

  Object.keys(selectedTopics).forEach((domainTitle) => {
    const topics = selectedTopics[domainTitle];
    Object.keys(topics).forEach((topic) => {
      const numQuestions = topics[topic];
      if (numQuestions > 0) {
        for (let idx = 0; idx < numQuestions; idx++) {
          questions.push({
            domain: domainTitle,
            topic: topic,
            question: (
                <>
                  Question {idx + 1} :
                  {topic} <br /><br /> What is the definition of XYZ? {/* Example question text */}
                </>
              )
                        });
        }
      }
    });
  });

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleChange = (event) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: event.target.value
    });
  };

  const handleSubmit = () => {
    // Gather results
    const totalQuestions = questions.length;
    const marks = Object.keys(answers).length; // Example for marks based on answered questions
    const timeTaken = '20 minutes'; // Replace with actual time tracking logic
    const dateTaken = new Date().toLocaleString();

    setExamResults({
      user: 'John Doe', // Replace with the actual logged-in user info
      timeTaken,
      dateTaken,
      totalQuestions,
      marks
    });
    setShowModal(true);
  };

  return (
    <div className="student-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="content-area">
          <h1>Write Your Test</h1>
          {currentQuestionIndex < questions.length ? (
            <div className="question-section">
              <h2>{questions[currentQuestionIndex].domain}</h2>
              <p>{questions[currentQuestionIndex].question}</p>
              <textarea
                placeholder="Your answer here"
                value={answers[currentQuestionIndex] || ''}
                onChange={handleChange}
                rows="4"
              />
              {currentQuestionIndex < questions.length - 1 ? (
                <button onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          ) : (
            <div>
              <h2>Exam Finished!</h2>
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Exam Results</h2>
            <p><strong>User:</strong> {examResults.user}</p>
            <p><strong>Time Taken:</strong> {examResults.timeTaken}</p>
            <p><strong>Date Taken:</strong> {examResults.dateTaken}</p>
            <p><strong>Total Questions:</strong> {examResults.totalQuestions}</p>
            <p><strong>Marks:</strong> {examResults.marks}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndStudentWriteTest;
