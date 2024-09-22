import React from 'react';
import './ModerateAws.css'; // Import CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';


const ModerateAws = () => {
  const questions = [
    { title: 'A+ Core 10-042024_240410_03333337_exam', id: 1 },
    { title: 'CompTIA-22001001_Full_Exam', id: 2 },
    { title: 'CompTIA_A+_Core_2_Exam_Guide', id: 3 }
  ];

  return (
    <div className="exam-prep-container">
      {/* Main Content */}
      <div className="main-content">
        <div className="profile-section">
          <div className="profile-picture">
            <img src="https://via.placeholder.com/100" alt="Profile" />
          </div>
          <div className="profile-info">
            <h4>Student Name</h4>
          </div>
        </div>

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
              {questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.title}</td>
                  <td>
                    <button className="approve-btn">
                    <FontAwesomeIcon icon={faCheckCircle} className="approve-icon" />
                    </button>
                  </td>
                  <td>
                    <button className="view-btn">
                    <FontAwesomeIcon icon={faEye} className="view-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Back Button */}
        <div className="back-button">
          <button>
          <FontAwesomeIcon icon={faArrowLeftLong} />          Back          </button>
        </div>
      </div>
    </div>
  );
};

export default ModerateAws;
