import React from 'react';
import './ScheduledTests.css';
import EnrolledStudentSidebar from '../../../Components/Sidebar/EnrolledStudentSidebar';
import { useLocation, useNavigate } from 'react-router-dom';
const ScheduledTests = () => {
  const tests = [
    {
      name: "Domain 1 Test",
      status: "Submitted",
      dueDate: "2024-09-16",
      grade: "30/50",
      canAttempt: false,
    },
    {
      name: "Domain 2 Test",
      status: "Not Submitted",
      dueDate: "2024-10-15",
      grade: "_/50",
      canAttempt: true,
    },
    {
      name: "Domain 3 Test",
      status: "Not Submitted",
      dueDate: "2024-09-28",
      grade: "_/50",
      canAttempt: true,
    },
  ];
  const navigate = useNavigate();
  const TakeTest = () => {
    navigate('/TakeTest');
  };
  return (
    <div className="scheduled-tests-page">
      
      <div className="content">
        <EnrolledStudentSidebar />
        <div className="main-content">
          <h1 className="page-heading">Scheduled Tests</h1>
          <table className="tests-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Grade</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test, index) => (
                <tr key={index}>
                  <td>{test.name}</td>
                  <td>{test.status}</td>
                  <td>{test.dueDate}</td>
                  <td>{test.grade}</td>
                  <td>
                    {test.canAttempt ? (
                      <button className="take-test-button" onClick={TakeTest}>Take Test</button>
                    ) : (
                      <span>N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduledTests;
