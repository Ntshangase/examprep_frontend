import React from 'react';
import './ManageClass.css';
import courses from '../../Data/Courses.json';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function ManageClass() {
  const navigate = useNavigate();

  const handleViewCourse = (courseId) => {
    navigate(`/CourseDetails`);   ///course-details/${courseId} for dynamic rendering
  };

  return (
    <div className="manage-class-container">
      <Sidebar />
      <div className="manage-class-content">
        <h2>Select Course to view classes</h2>
        <div className='courses-grid'>
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-name">{course.title}</h3>
              <button className="view-course-button" onClick={() => handleViewCourse(course.id)}>
                View Classes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}