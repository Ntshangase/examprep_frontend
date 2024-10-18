import React, { useEffect, useState } from 'react';
import './ManageClass.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { getClasses } from '../../Api/Api';

export default function ManageClass() {
  const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

  const navigate = useNavigate();

  const handleViewCourse = (x) => {
    navigate(`/CourseDetails/${x}`);
  };

  const [ classes, setClasses ] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getClasses("/api/courses/with-classes");
				setClasses(response.data);
			} catch (error) {
				console.log(error);
			} finally {
        setLoading(false);
      }
		};

		fetchData();
	}, []);


if (loading) {
  return <div>Loading...</div>; // Display while fetching data
}

  console.log(classes);

  return (
    <div className="manage-class-container">
      <Sidebar links={links}/>
      <div className="manage-class-content">
        <h2>Select Course to view classes</h2>
        <div className='manage-class-courses-grid'>
          {classes.map((course) => (
            <div key={course.courseId} className="manage-class-course-card">
              <img src={`data:image/jpeg;base64,${course.image}`} alt={course.courseName} className="manage-student-course-image" />
              <h3 className="manage-class-course-name">{course.courseName}</h3>
              <button className="manage-class-view-course-button" onClick={() => handleViewCourse(course.courseId)}>
                View Classes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}