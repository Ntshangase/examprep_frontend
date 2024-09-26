import React, { useState } from 'react';
import './PanelEnrolled.css';
import EnrolledStudentSidebar from '../../../Components/Sidebar/EnrolledStudentSidebar';

const PanelEnrolled = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleGenerateTest = () => setModalOpen(true);
  const handleScheduledTests = () => window.location.href = '/ScheduledTests';

  return (
    <div className="classes-page">
      <div className="content">
        <EnrolledStudentSidebar />
        <div className="main-content">
          <div className="course-detail-content">
            {/* Top Section: Course Image and Info */}
            <div className="top-section">
              <div className="course-image">
                <img src="/assets/comp2.png" alt="CompTIA Security+" />
              </div>
              <div className="course-info">
                <h1>CompTIA Security+</h1>
                <h2>About Course</h2>
                <p>
                  The CompTIA Security+ certification is recognized globally as a trusted validation of foundational,
                  vendor-neutral IT security knowledge and skills. It covers essential principles in network security
                  and risk management.
                </p>
                <p><strong>Number of Modules:</strong> 5</p>
              </div>
            </div>

            {/* Black Line Separator */}
            <hr className="black-separator" />

            {/* Bottom Section: Class Details and Buttons */}
            <div className="enrolled-class-details">
              <p><strong><a href="/class-details/intake-june-2024" className="class-link">Intake June 2024</a></strong></p>
              <p><strong>Instructor:</strong> Dr. J. Smith</p>
              <p><strong>Duration:</strong> June 1, 2024 - August 31, 2024</p>
            </div>

            {/* Button Section */}
            <div className="button-container">
              <button className="action-button" onClick={handleGenerateTest}>
                Generate Test
              </button>
              <button className="action-button" onClick={handleScheduledTests}>
                Scheduled Tests
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Generate Test */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Generate Test</h2>
            <p>Are you sure you want to generate a new test for this course?</p>
            <div className="modal-actions">
              <button onClick={() => setModalOpen(false)} className="modal-close-button">Cancel</button>
              <button onClick={() => window.location.href = '/IndStudentCreateTest'} className="modal-confirm-button">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelEnrolled;
