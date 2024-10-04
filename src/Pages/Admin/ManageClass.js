import React from 'react';
import './ManageClass.css';
import courses from '../../Data/Courses.json';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default function ManageClass() {
  const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate(`/CourseDetails`);
  };

  return (
    <div className="manage-class-container">
      <Sidebar links={links}/>
      <div className="manage-class-content">
        <h2>Select Course to view classes</h2>
        <div className='manage-class-courses-grid'>
          {courses.map((course) => (
            <div key={course.id} className="manage-class-course-card">
              <img src={course.image} alt={course.title} className="manage-student-course-image" />
              <h3 className="manage-class-course-name">{course.title}</h3>
              <button className="manage-class-view-course-button" onClick={handleViewCourse}>
                View Classes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}