import React from 'react';
import './CourseCard.css';
import { useNavigate } from 'react-router-dom';

// This component renders a single course card.



const CourseCard = ({ id, title, image }) => {

  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate(`/AssignedClasses/${id}`);
  };

  return (
    <div className="course-card"onClick={handleCourseClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default CourseCard;
