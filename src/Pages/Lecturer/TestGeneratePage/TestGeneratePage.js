import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import GenerateTest from '../../../Components/GenerateTest/GenerateTest';
import './TestGeneratePage.css';

const TestGeneratePage = () => {
  return (
    <div className="test-page">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <h1>Select Domains to Generate Test</h1>
          <GenerateTest />
        </div>
      </div>
    </div>
  );
};

export default TestGeneratePage;
