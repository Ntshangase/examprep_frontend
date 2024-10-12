import React from "react";
import "./Classes.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const Classes = () => {

	const links = [
		{path: "/StudentDashboards", pathName:"Home"},
		{path: "/Classes", pathName:"Active Classes"},
		{path: "/PanelEnrolled", pathName:"Enrolled Class"},
		{path: "/ScheduledTests", pathName:"Scheduled Test"},
		{path: "/StudentProfile", pathName:"Student Profile"},
	]

	return (
		<div className="classes-page">
			<div className="content">
				<Sidebar links={links}/>
				<div className="main-content">
					<h1>Active Classes</h1>
					{/* Line separator */}
					<hr className="black-separator" />
					{/* Class 1 */}
					<div className="class-section">
						<p>
							<strong>
								<a href="/PanelEnrolled" className="class-link">
									Intake June 2024
								</a>
							</strong>
						</p>
						<p>
							<strong>Lecturer:</strong> Dr. J. Smith
						</p>
						<p>
							<strong>Course:</strong> CompTIA Security+
						</p>
						<p>
							<strong>Duration:</strong> June 1, 2024 - August 31, 2024
						</p>
					</div>

					{/* Line separator */}
					<hr className="black-separator" />

					{/* Class 2 */}
					<div className="class-section">
						<p>
							<strong>
								<a
									href="/class-details/intake-march-2024"
									className="class-link"
								>
									Intake March 2024
								</a>
							</strong>
						</p>
						<p>
							<strong>Lecturer:</strong> Prof. A. Green
						</p>
						<p>
							<strong>Course:</strong> CompTIA A+
						</p>
						<p>
							<strong>Duration:</strong> March 1, 2024 - May 31, 2024
						</p>
					</div>

					{/* Line separator */}
					<hr className="black-separator" />

					{/* Class 3 */}
					<div className="class-section">
						<p>
							<strong>
								<a
									href="/class-details/intake-january-2024"
									className="class-link"
								>
									Intake January 2024
								</a>
							</strong>
						</p>
						<p>
							<strong>Lecturer:</strong> Ms. L. Brown
						</p>
						<p>
							<strong>Course:</strong> CompTIA Cloud+
						</p>
						<p>
							<strong>Duration:</strong> January 1, 2024 - March 31, 2024
						</p>
					</div>

					{/* Line separator */}
					<hr className="black-separator" />
				</div>
			</div>
		</div>
	);
};

export default Classes;
