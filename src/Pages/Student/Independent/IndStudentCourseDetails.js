import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './IndStudentCourseDetails.css';

const InStudentCourseDetails = () => {

  // Function for button click
  const handleGenerateTest = () => {
    window.location.href = '/generate-test';
  };

  return (
    <div className="course-detail">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="content-area">
          <h1>CompTIA Security+</h1>

          <div className="course-container">
            {/* Placeholder for the Course Image */}
            <div className="course-card">
              <img src="/path-to-placeholder-image/course-placeholder.png" alt="CompTIA Security+" />
              <h2>CompTIA Security+</h2>
              <p>
                The CompTIA Security+ certification is recognized globally as a trusted validation of
                foundational, vendor-neutral IT security knowledge and skills. It covers essential principles
                in network security and risk management.
              </p>
              <p>Number of domains: 5</p>

              {/* Only the button should navigate to a new page */}
              <button className="generate-test-button" onClick={handleGenerateTest}>
                Generate Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndStudentCourseDetails;