import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button'
import './TestSettings.css';

const TestSettings = () => {
  return (
    <div className="test-settings">
      <h2>Test settings</h2>
      <Input label="Due Date" placeholder="01/09/2024" />
      <Input label="Test name" placeholder="Enter the test name" />
      <Input label="Grading Points" placeholder="Points" />
      <div className="attempts-container">
        <label>Attempts Allowed</label>
        <select>
          <option>3 attempts allowed</option>
          <option>1 attempt allowed</option>
          <option>Unlimited attempts</option>
        </select>
      </div>
      <Button label="Save Settings" />
    </div>
  );
};

export default TestSettings;