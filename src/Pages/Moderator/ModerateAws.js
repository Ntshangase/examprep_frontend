import React, { useState } from 'react';
import './ModerateAws.css'; // Import CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../Components/Navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks for routing


const ModerateAws = () => {
  const location = useLocation(); // Get location to access passed state
  const navigate = useNavigate(); // Initialize navigate
  const { course } = location.state || {}; // Destructure course from state

  // State to manage the modal visibility and dump approval
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [approvedDump, setApprovedDump] = useState(null);

  // Sample questions associated with courses
  const questions = {
    "AWS Cloud Practitioner": [
      { title: 'AWS Fundamentals Exam-Dump-V-2024-05-1', id: 1 },
      { title: 'AWS Architecture Exam', id: 2 }
    ],
    "CompTIA A+ Certified": [
      { title: 'CompTIA A+ Core 1 Exam', id: 3 },
      { title: 'CompTIA A+ Core 2 Exam', id: 4 }
    ],
    "AWS Solutions Architect": [
      { title: 'Solutions Architect 1 Exam', id: 5 },
      { title: 'Solutions Architect 2 Exam', id: 6 }
    ],
    "Microsoft Fundamentals": [
      { title: 'Microsoft Azure Fundamentals Exam', id: 7 }
    ],
    "Huawei HCNA": [
      { title: 'Huawei HCNA Exam', id: 7 }
    ],
  };

  // Get relevant questions based on the selected course
  const courseQuestions = course && course.name ? questions[course.name] : [];

  const handleViewQuestions = (question) => {
    // Navigate to the QuestionView page, passing the selected question and course as state
    navigate('/QuestionView', { state: { question, course } });
  };

  const handleApprove = (question) => {
    setApprovedDump(question.title); // Set the approved dump name
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setApprovedDump(null); // Reset the approved dump
  };

  return (
    <div className="exam-prep-container">
      <div className="Moderator-dashboard">
        <Navbar />
        <div className="dashboard-content">
          <div className="content-area">
            <div className="main-content">
              <h3>Moderating: {course ? course.name : "Course Not Selected"}</h3>

              {/* Uploaded Questions Table */}
              <div className="questions-section">
                <h3>Uploaded Questions</h3>
                <table className="questions-table">
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Approve</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseQuestions.length > 0 ? (
                      courseQuestions.map((question) => (
                        <tr key={question.id}>
                          <td>{question.title}</td>
                          <td>
                            <button className="approve-btn" onClick={() => handleApprove(question)}>
                              <FontAwesomeIcon icon={faCheckCircle} className="approve-icon" />
                            </button>
                          </td>
                          <td>
                            <button className="view-btn" onClick={() => handleViewQuestions(question)}>
                              <FontAwesomeIcon icon={faEye} className="view-icon" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3">No questions available for this course.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Back Button */}
              <div className="back-button">
                <button onClick={() => navigate(-1)}>
                  <FontAwesomeIcon icon={faArrowLeftLong} /> Back
                </button>
              </div>

              {/* Approval Modal */}
              {isModalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <h2>Approval Confirmation</h2>
                    <p>The Exam Dump <b>{approvedDump}</b> has been approved!</p>
                    <button onClick={closeModal} className="modal-close-btn">Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModerateAws;
