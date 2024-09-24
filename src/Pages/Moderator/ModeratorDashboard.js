import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ModeratorDashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const AWSBadge = `${process.env.PUBLIC_URL}/assets/AWS-Cloud-Practitioner-Badge.jpeg`;
const CompTIABadge = `${process.env.PUBLIC_URL}/assets/CompTIA-A+-Badge.jpg`;
const MicrosoftBadge = `${process.env.PUBLIC_URL}/assets/Microsoft-Fundamentals-Badge.png`;
const AWSArchitectBadge = `${process.env.PUBLIC_URL}/assets/AWS-Solutions-Architect-Badge.png`;
const HuaweiBadge = `${process.env.PUBLIC_URL}/assets/Huawei-HCNA-Badge.jpg`;

const courses = [
  { name: "AWS Cloud Practitioner", image: AWSBadge },
  { name: "CompTIA A+ Certified", image: CompTIABadge },
  { name: "Microsoft Fundamentals", image: MicrosoftBadge },
  { name: "AWS Solutions Architect", image: AWSArchitectBadge },
  { name: "Huawei HCNA", image: HuaweiBadge },
];

const ModeratorDashboard = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleCourseSelect = (course) => {
    navigate("/ModerateAws", { state: { course } }); // Navigate and pass course data
  };

  return (
    <div className="exam-prep-container">
        
        <div className="dashboard-content">
          <Sidebar />
          <div className="content-area">
            <h2>Select Course to Moderate</h2>
            {/* Certification Badges with Labels */}
            <div className="badge-section">
              {courses.map((course) => (
                <div className="badge-card" key={course.name} onClick={() => handleCourseSelect(course)}>
                  <div className="badge">
                    <img src={course.image} alt={course.name} className="badge-image" />
                    <p>{course.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ModeratorDashboard;
