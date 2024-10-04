import React from "react";
import CourseCard from "../../../Components/CourseCard/CourseCard";
import './LecturerDashboard.css';
import courses from '../../../Data/Courses.json';  // Corrected path
import Sidebar from "../../../Components/Sidebar/Sidebar";

const LecturerDashboard = () => {
  const links = [
		{path: "/LecturerDashboard", pathName: "Home"},
		{path: "/AddStudent", pathName: "Add Student"}
	]

    return (
        <div className="lecturer-dashboard">

        <div className="dashboard-content">
            <Sidebar links={links}/>
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
