import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import "./IndStudentCourseDets.css";

const IndStudentCourseDets = () => {
	const links = [
		{ path: "/IndStudentCourses", pathName: "Home" },
		// { path: "/IndStudentdash", pathName: "Course Details" },
	];

	const location = useLocation();
	const navigate = useNavigate();
	const course = location.state?.course || {
		title: "No Course Selected",
		description: "Please select a course from the available options.",
		domains: "N/A",
		image: "/assets/default-course.png",
		progress: 0,
	};

	const exploreCourses = [
		{ title: "Introduction to React", image: "/assets/react.png" },
		{ title: "Advanced JavaScript", image: "/assets/cisco.png" },
		{ title: "Web Development Fundamentals", image: "/assets/web-dev.png" },
		{
			title: "CompTIA Penetration Testing",
			image: "/assets/Comptia-PenTest-course.png",
		},
	];

	return (
		<div className="independent-student-courses">
			<Sidebar links={links} />
			<div className="page-content">
				{/* Upper Half: Course Details */}
				<div className="upper-half">
					<h1 className="page-title">Course Details</h1>
					<div className="course-details">
						<img
							src={course.image}
							alt={course.title}
							className="course-image-large"
						/>
						<div className="course-info">
							<h2 className="course-title">{course.name}</h2>
							<div className="progress-container">
								<div
									className="progress-bar"
									style={{ width: `${course.progress}%` }}
								></div>
							</div>
							<p>{course.progress}% Completed</p>
							<h3>Course Description</h3>
							<p>{course.description}</p>
							<h3>Number of Domains</h3>
							<p>{course.domains}</p> {/* Display number of domains */}
							<button
								onClick={() => navigate("/IndStudentCreateTest")}
								className="generate-test-button"
							>
								Generate Test
							</button>
						</div>
					</div>
				</div>

				{/* Lower Half: Explore More Courses */}
				<div className="lower-half">
					<h2 className="explore-courses-title">Explore More Courses</h2>
					<div className="courses-grid">
						{exploreCourses.map((exploreCourse, index) => (
							<div key={index} className="course-card">
								<img
									src={exploreCourse.image}
									alt={exploreCourse.title}
									className="course-image"
								/>
								<h2 className="course-title">{exploreCourse.title}</h2>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndStudentCourseDets;
