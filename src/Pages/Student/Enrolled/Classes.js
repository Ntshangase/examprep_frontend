import React from "react";
import "./Classes.css";
import EnrolledStudentSidebar from "../../../Components/Sidebar/EnrolledStudentSidebar";

const Classes = () => {
	return (
		<div className="classes-page">
			<div className="content">
				<EnrolledStudentSidebar />
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
							<strong>Instructor:</strong> Dr. J. Smith
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
							<strong>Instructor:</strong> Prof. A. Green
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
							<strong>Instructor:</strong> Ms. L. Brown
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
