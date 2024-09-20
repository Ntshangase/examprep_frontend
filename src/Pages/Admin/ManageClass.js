import React from 'react';
import './ManageClass.css';
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';
import courses from '../../Data/Courses.json';
import { useNavigate } from 'react-router-dom';

export default function ManageClass() {
  const navigate = useNavigate();

  const handleViewCourse = (courseId) => {
    navigate(`/CourseDetails`);   ///course-details/${courseId} for dynamic rendering
  };

  return (
    <div className="manage-class-container">
      <AdminSidebar />
      <div className="manage-class-content">
        <h2>Select Course to view class</h2>
        <div className='courses-grid'>
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-name">{course.title}</h3>
              <button className="view-course-button" onClick={() => handleViewCourse(course.id)}>
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}