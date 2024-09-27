import React from 'react';
import IndependentSudentSidebar from '../../../Components/Sidebar/IndependentStudentSidebar';
import './IndStudentCourseDetails.css';

const IndStudentCourseDetails = () => {
  
  // Function for button click
  const handleGenerateTest = () => {
    window.location.href = '/IndStudentCreateTest';
  };

  return (
    <div className="course-detail">
      <div className="dashboard-content">
        <IndependentSudentSidebar />
        <div className="content-area">
          <div className="course-detail-content">
            {/* Top Section: Course Image and Info */}
            <div className="top-section">
              {/* Left Section: Course Image */}
              <div className="course-image">
                <img src="/assets/AWS-Cloud-Practitioner-Badge.jpeg" alt="CompTIA Security+" />
              </div>

              {/* Right Section: Course Details */}
              <div className="independent-student-course-info">
                <h1>AWS-Cloud-Practitioner</h1>
                <p className="independent-student-about-course">
                  The CompTIA Security+ certification is recognized globally as a trusted validation of
                  foundational, vendor-neutral IT security knowledge and skills. It covers essential principles
                  in network security and risk management.
                </p>

                <hr className="separator" />

                <p><strong>Number of Modules:</strong> 5</p>

                {/* Grey Line Separator */}
                <hr className="separator" />
              </div>
            </div>

      
            <div className="class-info-container">
              {/* <p><strong>Class: </strong> ComptiaS+</p> */}
              <div className="generate-test-container">
                <button className="generate-test-button" onClick={handleGenerateTest}>
                  Generate Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndStudentCourseDetails;
