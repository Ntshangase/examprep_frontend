import React from "react";
import "./ModeratorDashboard.css";
import AWSBadge from "../imgs/AWS-Cloud-Practitioner-Badge.jpeg";
import CompTIABadge from "../imgs/CompTIA-A+-Badge.jpg";
import MicrosoftBadge from "../imgs/Microsoft-Fundamentals-Badge.png";
import AWSArchitectBadge from "../imgs/AWS-Solutions-Architect-Badge.png";
import HuaweiBadge from "../imgs/Huawei-HCNA-Badge.jpg";

const ModeratorDashboard = () => {
  return (
    <div className="exam-prep-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="profile-section">
          <div className="profile-picture">
            <img
              src="https://via.placeholder.com/100" // Placeholder image for user profile
              alt="User Profile"
            />
          </div>
        </div>

        <h3>ExamPrep Project</h3>
        <ul>
          <li>Select Questions</li>
          <li>LogOut</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Profile Section */}

        <h2>Select Course to Moderate</h2>
        {/* Certification Badges with Labels */}
        <div className="badge-section">
          <div className="badge-card">
            <div className="badge">
              <img
                src={AWSBadge}
                alt="AWS Cloud Practitioner"
                className="badge-image"
              />
              <p>AWS Cloud Practitioner</p>
            </div>
          </div>
          <div className="badge-card">
            <div className="badge">
              <img
                src={CompTIABadge}
                alt="CompTIA A+ Certified"
                className="badge-image"
              />
              <p>CompTIA A+ Certified</p>
            </div>
          </div>
          <div className="badge-card">
            <div className="badge">
              <img
                src={MicrosoftBadge}
                alt="Microsoft Fundamentals"
                className="badge-image"
              />
              <p>Microsoft Fundamentals</p>
            </div>
          </div>
          <div className="badge-card">
            <div className="badge">
              <img
                src={AWSArchitectBadge}
                alt="AWS Solutions Architect"
                className="badge-image"
              />
              <p>AWS Solutions Architect</p>
            </div>
          </div>
          <div className="badge-card">
            <div className="badge">
              <img
                src={HuaweiBadge}
                alt="Huawei HCNA"
                className="badge-image"
              />
              <p>Huawei HCNA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeratorDashboard;
