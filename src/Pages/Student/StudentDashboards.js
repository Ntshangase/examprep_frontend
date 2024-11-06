import React from "react";
import Sidebar from "../../../src/Components/Sidebar/Sidebar";
import "./StudentDashboard.css";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
	const links = [
		{ path: "/IndStudentCourses", pathName: "Home" },
		{ path: "/IndStudentCourses", pathName: "Independent Student" },
		{ path: "/Classes", pathName: "Enrolled Student" },
	];

	const navigate = useNavigate();



	return (
		<div className="student-dashboards-container">
			<Sidebar links={links} />
			<div className="student-dashboards-content">
				<h2 className="student-dashboards-content-h2">Welcome to the Student Dashboard</h2>
				<div className="card-container">
					<div
						className="card"
						onClick={() => {navigate("/IndStudentCourses")}}
					>
						<img
							src="/assets/independentStudent.jpg"
							alt="Independent Student"
						/>
						<h2>Independent Student</h2>
						<p>Access resources and manage your learning independently.</p>
					</div>
					<div
						className="card"
						onClick={() => {navigate("/Classes")}}
					>
						<img src="/assets/enrolledStudent.jpeg" alt="Enrolled Student" />
						<h2>Enrolled Student</h2>
						<p>View courses, schedules, and track your progress.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentDashboard;
