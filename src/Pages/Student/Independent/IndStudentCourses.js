import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IndStudentCourses.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { getIndependentStudentCourses } from "../../../Api/Api";
import { useSelector } from "react-redux";

const IndStudentCourses = () => {

  const links = [
		{path: "/IndStudentCourses", pathName: "Home"},
		{path: "/IndStudentdash", pathName: "Course Details"},
	]

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const [loadingState, setLoadingState] = useState(true);
  const [courseData, setCourseData] = useState();

  // Function to handle course selection
  const handleCourseSelect = (courseId) => {
    // Navigate to course detail page, passing course data as state
    navigate(`/IndStudentCourseDetails/${courseId}`);
  };

  useEffect(() => {
    const fetchAllStudentCourses = async() => {
      try {
        const response = await getIndependentStudentCourses(user.id);
        setCourseData(response.data);
      } catch (error) {
        console.log(error)
      }finally{
        setLoadingState(false);
      }
    };
    fetchAllStudentCourses();
  },[user]);

  if(loadingState){
    return <div>...Loading</div>
  }

  return (
    <div className="indipendent-student-courses-container">
        <Sidebar links={links}/>
        <div className="content-area">
          <h2 className="indipendent-student-courses-h2">Available Courses</h2>
          {/* Certification Badges with Labels */}
          <div className="badge-section">
            {courseData.map((course,index) => (
              <div
                className="badge-card"
                key={index}
                onClick={() => handleCourseSelect(course.courseId)}
              >
                <div className="badge">
                  <img src={`data:image/jpeg;base64,${course.image}`} alt={course.courseName} className="badge-image" />
                  <h4>{course.courseName}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default IndStudentCourses;
