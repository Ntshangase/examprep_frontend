import React from 'react';
import Sidebar from "../../../Components/Sidebar/Sidebar";
import TestSettings from '../../../Components/TestSettings/TestSettings';
import Button from '../../../Components/Button/Button';
import './TestPage.css';

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="content">
        <Sidebar />
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