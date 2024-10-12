import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../src/Components/Sidebar/Sidebar";
import "./DataCaptureDashboard.css"; // CSS for styling

const DataCaptureDashboard = () => {
	const links = [{ path: "/DataCaptureDashboard", pathName: "Home" }];

	const navigate = useNavigate();
	const handleCourseSelect = (course) => {
		navigate("/AddQuestions", { state: { course } }); // Navigate and pass course data
	};

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

	return (
		<div className="data-capture-dashboard-container">
			<Sidebar links={links} />
			<div className="data-capture-content-area">
				<h2>Select Course to Add Question</h2>
				{/* Certification Badges with Labels */}
				<div className="badge-section">
					{courses.map((course) => (
						<div
							className="badge-card"
							key={course.name}
							onClick={() => handleCourseSelect(course)}
						>
							<div className="badge">
								<img
									src={course.image}
									alt={course.name}
									className="badge-image"
								/>
								<p className="data-capture-about-course">{course.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DataCaptureDashboard;
