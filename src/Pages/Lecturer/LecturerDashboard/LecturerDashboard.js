import React from "react"; 
// import Navbar from "../../../Components/Navbar/Navbar";
import CourseCard from "../../../Components/CourseCard/CourseCard";
import './LecturerDashboard.css';

// data
import courses from '../../../Data/Courses.json';  // Corrected path
import LecturerSidebar from "../../../Components/Sidebar/LecturerSidebar";

const LecturerDashboard = () => {
    return (
        <div className="lecturer-dashboard">

        <div className="dashboard-content">
            <LecturerSidebar/>
          <div className="content-area">
            <h1>Courses</h1>
            <div className="courses-grid">
              {courses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  id={course.id}
                  title={course.title} 
                  image={course.image} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default LecturerDashboard;
