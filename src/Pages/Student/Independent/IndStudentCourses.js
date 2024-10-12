import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./IndStudentCourses.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const AWSBadge = `${process.env.PUBLIC_URL}/assets/AWS-Cloud-Practitioner-Badge.jpeg`;
const CompTIABadge = `${process.env.PUBLIC_URL}/assets/CompTIA-A+-Badge.jpg`;
const MicrosoftBadge = `${process.env.PUBLIC_URL}/assets/Microsoft-Fundamentals-Badge.png`;
const AWSArchitectBadge = `${process.env.PUBLIC_URL}/assets/AWS-Solutions-Architect-Badge.png`;
const HuaweiBadge = `${process.env.PUBLIC_URL}/assets/Huawei-HCNA-Badge.jpg`;
const ComptiaSBadge = `${process.env.PUBLIC_URL}/assets/comp2.png`;

const courses = [
  { name: "AWS Cloud Practitioner", image: AWSBadge, domains: '5', progress: '75' },
  { name: "CompTIA A+ Certified", image: CompTIABadge, domains: '5', progress: '69' },
  { name: "CompTIA S+ Certified", image: ComptiaSBadge, domains: '5', progress: '46' },
  { name: "Microsoft Fundamentals", image: MicrosoftBadge, domains: '5', progress: '91' },
  { name: "AWS Solutions Architect", image: AWSArchitectBadge, domains: '5', progress: '25' },
  { name: "Huawei HCNA", image: HuaweiBadge, domains: '5', progress: '24' },
];

const IndStudentCourses = () => {

  const links = [
		{path: "/StudentDashboards", pathName: "Home"},
		{path: "/IndStudentdash", pathName: "Course Details"},
	]

  const navigate = useNavigate(); // Initialize navigate

  // Function to handle course selection
  const handleCourseSelect = (course) => {
    // Navigate to course detail page, passing course data as state
    navigate("/IndStudentCourseDetails", { state: { course } });
  };

  return (
    <div className="indipendent-student-courses-container">
        <Sidebar links={links}/>
        <div className="content-area">
          <h2 className="indipendent-student-courses-h2">Available Courses</h2>
          {/* Certification Badges with Labels */}
          <div className="badge-section">
            {courses.map((course) => (
              <div
                className="badge-card"
                key={course.name}
                onClick={() => handleCourseSelect(course)}
              >
                <div className="badge">
                  <img src={course.image} alt={course.name} className="badge-image" />
                  <p>{course.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default IndStudentCourses;
