import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./IndStudentDash.css";
import IndependentStudentSidebar from "../../../Components/Sidebar/IndependentStudentSidebar";

const AWSBadge = `${process.env.PUBLIC_URL}/assets/AWS-Cloud-Practitioner-Badge.jpeg`;
const CompTIABadge = `${process.env.PUBLIC_URL}/assets/CompTIA-A+-Badge.jpg`;

const courses = [
	{ name: "AWS Cloud Practitioner", image: AWSBadge },
	{ name: "CompTIA A+ Certified", image: CompTIABadge }
];

const ModeratorDashboard = () => {
	const navigate = useNavigate(); // Initialize navigate
	const viewQuestions = () => {
		navigate("/IndStudentCourseDetails");
	};

	return (
		<div className="exam-prep-container">
			<div className="dashboard-content">
				<IndependentStudentSidebar />
				<div className="content-area">
					<h2>Select Course to Generate Test</h2>
					{/* Certification Badges with Labels */}
					<div className="badge-section">
						{courses.map((course) => (
							<div
								className="badge-card"
								key={course.name}
								onClick={viewQuestions}
							>
								<div className="badge">
									<img
										src={course.image}
										alt={course.name}
										className="badge-image"
									/>
									<p>{course.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModeratorDashboard;
