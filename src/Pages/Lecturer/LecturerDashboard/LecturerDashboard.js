import React from "react"; 
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import CourseCard from "../../../Components/CourseCard/CourseCard";
import './LecturerDashboard.css';

const courses = [
    { title: 'Architecting on AWS', image: '/assets/aws.png' },
    { title: 'CompTIA A+ Bootcamp', image: '/assets/comptia.png' }
];

const LecturerDashboard = () => {
    return (
        <div className="lecturer-dashboard">
        <Navbar />
        <div className="dashboard-content">
          <Sidebar />
          <div className="content-area">
            <h1>Courses</h1>
            <div className="courses-grid">
              {courses.map((course, index) => (
                <CourseCard key={index} title={course.title} image={course.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default LecturerDashboard;