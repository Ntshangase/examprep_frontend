import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './IndStudentCourseDetails.css';

const IndStudentCourseDetails = () => {

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

          {/* Generate Test Button placed below sections */}
          <div className="generate-test-container">
            <button className="generate-test-button" onClick={handleGenerateTest}>
              Generate Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndStudentCourseDetails;
