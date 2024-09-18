import React from "react";
import "./ModeratorDashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const AWSBadge = `${process.env.PUBLIC_URL}/assets/AWS-Cloud-Practitioner-Badge.jpeg`;
const CompTIABadge = `${process.env.PUBLIC_URL}/assets/CompTIA-A+-Badge.jpg`;
const MicrosoftBadge = `${process.env.PUBLIC_URL}/assets/Microsoft-Fundamentals-Badge.png`;
const AWSArchitectBadge = `${process.env.PUBLIC_URL}/assets/AWS-Solutions-Architect-Badge.png`;
const HuaweiBadge = `${process.env.PUBLIC_URL}/assets/Huawei-HCNA-Badge.jpg`;

const ModeratorDashboard = () => {
  return (
    <div className="exam-prep-container">
      {/* Sidebar Navigation */}
<Sidebar/>
      {/* Main Content Area */}
      <div className="main-content">
        {/* Profile Section */}
        <Navbar/>
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
