import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ModeratorDashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

const AWSBadge = `${process.env.PUBLIC_URL}/assets/AWS-Cloud-Practitioner-Badge.jpeg`;
const CompTIABadge = `${process.env.PUBLIC_URL}/assets/CompTIA-A+-Badge.jpg`;
const MicrosoftBadge = `${process.env.PUBLIC_URL}/assets/Microsoft-Fundamentals-Badge.png`;
const AWSArchitectBadge = `${process.env.PUBLIC_URL}/assets/AWS-Solutions-Architect-Badge.png`;
const HuaweiBadge = `${process.env.PUBLIC_URL}/assets/Huawei-HCNA-Badge.jpg`;

const courses = [
	{ name: "AWS Cloud Practitioner", image: AWSBadge },
	{ name: "CompTIA A+ Certified", image: CompTIABadge },
	{ name: "Microsoft Fundamentals", image: MicrosoftBadge },
	{ name: "AWS Solutions Architect", image: AWSArchitectBadge },
	{ name: "Huawei HCNA", image: HuaweiBadge },
];

const ModeratorDashboard = () => {
	const links = [
		{path: "/ModeratorDashboard", pathName: "Home"},
		{path: "/QuestionView", pathName: "Questions"}
	]

	const navigate = useNavigate(); // Initialize navigate
	const viewQuestions = () => {
		navigate("/QuestionView");
	};

	return (
		<div className="moderator-dashboard-container">
			<div className="dashboard-content">
				<Sidebar links={links}/>
				<div className="moderator-content-area">
					<h2 className="moderator-content-area-h2">Select Course to Moderate</h2>
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
