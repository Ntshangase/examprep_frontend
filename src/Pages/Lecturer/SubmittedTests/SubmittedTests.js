import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import './SubmittedTests.css';

// Example test data
const testSubmissions = [
    { id: 1, name: 'TestPrep01', date: '05/06/2024' },
    { id: 2, name: 'TestPrep02', date: '05/06/2024' },
    { id: 3, name: 'TestPrep03', date: '05/06/2024' },
  ];

// Component to display submitted tests page with a table of tests and a back arrow navigation
const SubmittedTests = () => {
    return (
        <div className="submitted-tests-page">
          <Navbar />
          <div className="content">
            <Sidebar />
            <div className="main-content">
              <h1>Submitted Tests</h1>
              <table className="tests-table">
                <thead>
                  <tr>
                    <th>Tests Name</th>
                    <th>Date Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {testSubmissions.map((test) => (
                    <tr key={test.id}>
                      <td><a href="#">{test.name}</a></td>
                      <td>{test.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="back-arrow">
                <span>&larr;</span> Back
              </div>
            </div>
          </div>
        </div>
      ); 
};

export default SubmittedTests;  
    