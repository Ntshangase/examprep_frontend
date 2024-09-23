import React from 'react';
import LecturerSidebar from "../../../Components/Sidebar/LecturerSidebar";
import TestSettings from '../../../Components/TestSettings/TestSettings';
import Button from '../../../Components/Button/Button';
import './TestPage.css';

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="content">
      <LecturerSidebar />
        <div className="main-content">
          <h1>Test Page</h1>
          <div>
          <Button label="Create test" />
          </div>
          <div>
            <TestSettings />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TestPage;