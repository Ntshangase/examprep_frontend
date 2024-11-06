import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ModeratorDashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getIndependentStudentCourses } from "../../Api/Api";
import { useSelector } from "react-redux";

const ModeratorDashboard = () => {
	const links = [
		{path: "/ModeratorDashboard", pathName: "Home"},
		{path: "/FlaggedQuestionView", pathName: "Flagged"}
	]

	const navigate = useNavigate(); // Initialize navigate
	const viewQuestions = (x) => {
		navigate(`/QuestionView/${x}`);
	};
	const user = useSelector((state) => state.user.userData);
	const [courseData, setCourseData] = useState([]);

	useEffect(() => {
		const fetchModeratorCourses = async () => {

			try {
				const response = await getIndependentStudentCourses(user.id);
				setCourseData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchModeratorCourses();
	},[user.id]);

	return (
		<div className="moderator-dashboard-container">
				<Sidebar links={links}/>
				<div className="moderator-content-area">
					<h2 className="moderator-content-area-h2">Select Course to Moderate</h2>
					{/* Certification Badges with Labels */}
					<div className="moderator-badge-section">
						{courseData.map((course, index) => (
							<div
								className="moderator-badge-card"
								key={index}
								onClick={() => {viewQuestions(course.courseId)}}
							>
								<div className="moderator-badge">
									<img
										src={`data:image/jpeg;base64,${course.image}`}
										alt={course.courseName}
										className="moderator-badge-image"
									/>
									<p>{course.courseName}</p>
								</div>
							</div>
						))}
					</div>
				</div>
		</div>
	);
};

export default ModeratorDashboard;
