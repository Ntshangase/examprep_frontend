import React from 'react';
import Navbar from '../../../src/Components/Navbar/Navbar';
import Sidebar from '../../../src/Components/Sidebar/Sidebar';

import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="content-area">
          <h1>Welcome to the Student Dashboard</h1>
          <div className="card-container">
            <div className="card" onClick={() => window.location.href='/IndStudentDash'}>
              <img src="/assets/independentStudent.jpg" alt="Independent Student" />
              <h2>Independent Student</h2>
              <p>Access resources and manage your learning independently.</p>
            </div>
            <div className="card" onClick={() => window.location.href='/Classes'}>
              <img src="/assets/enrolledStudent.jpeg" alt="Enrolled Student" />
              <h2>Enrolled Student</h2>
              <p>View courses, schedules, and track your progress.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
