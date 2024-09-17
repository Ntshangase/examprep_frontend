import React from 'react';
import './ModeratorDashboard.css';
import AWSBadge from '../imgs/AWS-Cloud-Practitioner-Badge.jpeg';
import CompTIABadge from '../imgs/CompTIA-A+-Badge.jpg';
import MicrosoftBadge from '../imgs/Microsoft-Fundamentals-Badge.png';
import AWSArchitectBadge from '../imgs/AWS-Solutions-Architect-Badge.png';
import HuaweiBadge from '../imgs/Huawei-HCNA-Badge.jpg';

const ModeratorDashboard = () => {
  return (
    <div className="exam-prep-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h3>ExamPrep Project</h3>
        <ul>
          <li>Select Questions</li>
          <li>Moderate Screen 1</li>
          <li>Moderate AWS</li>
          <li>Moderate CompTIA</li>
          <li>Scheduled Test</li>
          <li>Generate Test</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-picture">
            <img
              src="https://via.placeholder.com/100" // Placeholder image for user profile
              alt="User Profile"
            />
          </div>
          <div className="profile-info">
            <h4>Profile</h4>
            <button>View Questions</button>
            <button>Logout</button>
          </div>
        </div>

        {/* Certification Badges with Labels */}
        <div className="badge-section">
          <div className="badge">
            <img src={AWSBadge} alt="AWS Cloud Practitioner" className="badge-image" />
            <p>AWS Cloud Practitioner</p>
          </div>
          <div className="badge">
            <img src={CompTIABadge} alt="CompTIA A+ Certified" className="badge-image" />
            <p>CompTIA A+ Certified</p>
          </div>
          <div className="badge">
            <img src={MicrosoftBadge} alt="Microsoft Fundamentals" className="badge-image" />
            <p>Microsoft Fundamentals</p>
          </div>
          <div className="badge">
            <img src={AWSArchitectBadge} alt="AWS Solutions Architect" className="badge-image" />
            <p>AWS Solutions Architect</p>
          </div>
          <div className="badge">
            <img src={HuaweiBadge} alt="Huawei HCNA" className="badge-image" />
            <p>Huawei HCNA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeratorDashboard;
