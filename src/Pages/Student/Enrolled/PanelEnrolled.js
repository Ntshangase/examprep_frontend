import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './PanelEnrolled.css';

const PanelEnrolled = () => {

  // Function for button click
  const handleGenerateTest = () => {
    window.location.href = '/generate-test';
  };

  const handleScheduledTests = () => {
    window.location.href = '/ScheduledTests';
  };

  return (
    <div className="course-detail">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="content-area">
          <div className="course-detail-content">
            {/* Left Section: Course Image */}
            <div className="course-image">
              <img src="/assets/comptiaS+.png" alt="CompTIA Security+" />
            </div>

            {/* Right Section: Course Details */}
            <div className="course-info">
              <h1>CompTIA Security+</h1>
              <h2>About Course</h2>
              <p>
                The CompTIA Security+ certification is recognized globally as a trusted validation of
                foundational, vendor-neutral IT security knowledge and skills. It covers essential principles
                in network security and risk management.
              </p>

              {/* Grey Line Separator */}
              <hr className="separator" />

              <p><strong>Number of Modules:</strong> 5</p>

              {/* Grey Line Separator */}
              <hr className="separator" />
            </div>
          </div>

          {/* Enrolled Classes Section */}
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
  );
};

export default PanelEnrolled;
