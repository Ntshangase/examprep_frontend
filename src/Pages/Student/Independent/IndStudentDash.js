import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useNavigate } from 'react-router-dom'; // Import hooks for routing
import './IndStudentDash.css';



const enrolledCourse = {
  title: 'CompTIA A+ Certified',
  description: 'CompTIA A+ is an entry-level certification for IT professionals, covering foundational IT skills such as hardware, networking, and troubleshooting.',
  domains: 'This course comes with 5 Domains',
  image: '/assets/comptia.png',
  progress: 75, // Percentage of course completed
};

const exploreCourses = [
  { title: 'Introduction to React', image: '/assets/react.png' },
  { title: 'Advanced JavaScript', image: '/assets/cisco.png' },
  { title: 'Web Development Fundamentals', image: '/assets/web-dev.png' },
  { title: 'CompTIA Penetration Testng', image: '/assets/Comptia-PenTest-course.png' }
];


const IndependentStudentCourses = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="independent-student-courses">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="content-area">
          <h1>Enrolled Course</h1>
          <div className="enrolled-course-section">
            {/* Enrolled Course on the left */}
            <div className="enrolled-course-card">
              <img src={enrolledCourse.image} alt={enrolledCourse.title} className="course-image" />
              <h2 className="course-title">{enrolledCourse.title}</h2>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${enrolledCourse.progress}%` }}></div>
              </div>
              <p>{enrolledCourse.progress}% Completed</p>
            </div>

            {/* Course description on the right */}
            <div className="course-description">
              <h3>Course Description</h3>
              <p>{enrolledCourse.description}</p>
              <br/>
              <h3>Number of Domains</h3>
              <p>{enrolledCourse.domains}</p>
              <button onClick={() => navigate("/IndStudentCreateTest")} className="continue-button">Create Test</button>
            </div>
          </div>
          {/* Explore other courses section */}
          <h2 className="explore-courses-title">Explore Courses</h2>
          <div className="courses-grid">
            {exploreCourses.map((course, index) => (
              <div key={index} className="course-card unavailable">
                <img src={course.image} alt={course.title} className="course-image" />
                <h2 className="course-title">{course.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
};

export default IndependentStudentCourses;
