import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import './IndStudentDash.css';

const courses = [
    { title: 'Introduction to React', image: '/assets/react.png' },
    { title: 'Advanced JavaScript', image: '/assets/js.png' },
    { title: 'Web Development Fundamentals', image: '/assets/web-dev.png' },
    { title: 'Database Management Systems', image: '/assets/dbms.png' }
];

const IndependentStudentCourses = () => {
  return (
    <div className="independent-student-courses">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="content-area">
          <h1>Available Courses for Independent Students</h1>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
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
