import React from "react";
import Sidebar from "../../../src/Components/Sidebar/Sidebar";

import "./StudentDashboard.css";

const StudentDashboard = () => {
	const links = [
		{ path: "/StudentDashboards", pathName: "Home" },
		{ path: "/IndStudentCourses", pathName: "Indipendent Student" },
		{ path: "/Classes", pathName: "Enrolled Student" },
	];

	return (
		<div className="student-dashboards-container">
			<Sidebar links={links} />
			<div className="student-dashboards-content">
				<h2 className="student-dashboards-content-h2">Welcome to the Student Dashboard</h2>
				<div className="card-container">
					<div
						className="card"
						onClick={() => (window.location.href = "/IndStudentCourses")}
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
						onClick={() => (window.location.href = "/Classes")}
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
