import React, { useState, useEffect } from 'react';
import './PanelEnrolled.css';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import { getEnrolledStudentClasses } from '../../../Api/Api.js';

const PanelEnrolled = () => {
  const links = [
    { path: "/StudentDashboards", pathName: "Home" },
    { path: "/Classes", pathName: "Active Classes" },
    { path: "/PanelEnrolled", pathName: "Enrolled Class" },
    { path: "/ScheduledTests", pathName: "Scheduled Test" },
    { path: "/StudentProfile", pathName: "Student Profile" },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const studentId = 455; // Example hardcoded student ID. Update this as necessary.

  useEffect(() => {
    const fetchEnrolledClasses = async () => {
      try {
        const response = await getEnrolledStudentClasses(studentId);
        setStudentData(response.data);
      } catch (error) {
        console.error("Error fetching enrolled student classes:", error);
      }
    };
    fetchEnrolledClasses();
  }, [studentId]);

  const handleGenerateTest = () => setModalOpen(true);
  const handleScheduledTests = () => (window.location.href = '/ScheduledTests');

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="classes-page">
      <div className="content">
        <Sidebar links={links} />
        <div className="main-content">
          <div className="course-detail-content">
            {/* Top Section: Course Image and Info */}
            <div className="top-section">
              <div className="course-image">
                {studentData.courses && studentData.courses[0]?.image ? (
                  <img src={`data:image/png;base64,${studentData.courses[0].image}`} alt={studentData.courses[0].courseName} />
                ) : (
                  <img src="/assets/comp2.png" alt="Course" />
                )}
              </div>
              <div className="course-info">
                <h1>{studentData.courses && studentData.courses[0]?.courseName}</h1>
                <h2>About Course</h2>
                <p>{studentData.courses && studentData.courses[0]?.courseDescription}</p>
                <p><strong>Number of Modules:</strong> </p> {/* Update dynamically if available */}
              </div>
            </div>

            {/* Black Line Separator */}
            <hr className="black-separator" />

            {/* Bottom Section: Class Details and Buttons */}
            <div className="enrolled-class-details">
              {studentData.courses && studentData.courses[0]?.classes && (
                <>
                  <p>
                    <strong>
                      <a href={`/class-details/${studentData.courses[0].classes[0].className.toLowerCase().replace(' ', '-')}`} className="class-link">
                        {studentData.courses[0].classes[0].className}
                      </a>
                    </strong>
                  </p>
                  <p><strong>Instructor:</strong> {studentData.courses[0].classes[0].lecturer || "To be announced"}</p>
                  <p>
                    <strong>Duration:</strong> {studentData.courses[0].classes[0].startDate} - {studentData.courses[0].classes[0].endDate}
                  </p>
                </>
              )}
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
              <button onClick={() => (window.location.href = '/IndStudentCreateTest')} className="modal-confirm-button">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelEnrolled;
