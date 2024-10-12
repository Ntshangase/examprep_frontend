import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./IndStudentCourseDetails.css";

const IndStudentCourseDetails = () => {
	const links = [
		{ path: "/StudentDashboards", pathName: "Home" },
		{ path: "/IndStudentdash", pathName: "Course Details" },
	];

	// Function for button click
	const handleGenerateTest = () => {
		window.location.href = "/IndStudentCreateTest";
	};

	return (
		<div className="indipendent-student-course-details-container">
			<Sidebar links={links} />
			<div className="indipendent-student-course-details-content">
				<h2 className="indipendent-student-course-details-h2">
					Course Information
				</h2>
				{/* Top Section: Course Image and Info */}
				<div className="indipendent-student-course-details-information-view">
					{/* Left Section: Course Image */}
					<div className="indipendent-student-course-details-course-image">
						<img
							src="/assets/AWS-Cloud-Practitioner-Badge.jpeg"
							alt="CompTIA Security+"
						/>
					</div>

					{/* Right Section: Course Details */}
					<div className="independent-student-course-info">
						<h2>AWS-Cloud-Practitioner</h2>
						<p className="independent-student-about-course">
							The CompTIA Security+ certification is recognized globally as a
							trusted validation of foundational, vendor-neutral IT security
							knowledge and skills. It covers essential principles in network
							security and risk management.
						</p>

						<hr className="separator" />

						<p>
							<strong>Number of Modules:</strong> 5
						</p>

						{/* Grey Line Separator */}
						<hr className="separator" />
					</div>
				</div>

				<div className="indipendent-student-course-details-button-div">
					<button className="indipendent-student-course-details-button" onClick={handleGenerateTest}>
						Generate Test
					</button>
				</div>
			</div>
		</div>
	);
};

export default IndStudentCourseDetails;
