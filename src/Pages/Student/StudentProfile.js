import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./StudentProfile.css";

const StudentProfile = () => {
	const links = [
		{ path: "/StudentDashboards", pathName: "Home" },
		{ path: "/Classes", pathName: "Active Classes" },
		{ path: "/PanelEnrolled", pathName: "Enrolled Class" },
		{ path: "/ScheduledTests", pathName: "Scheduled Test" },
		{ path: "/StudentProfile", pathName: "Student Profile" },
	];

	const [isEditing, setIsEditing] = useState(false);

	const [studentInfo, setStudentInfo] = useState({
		imageUrl: "/assets/images.jpeg",
		name: "John Zulu",
		gender: "Male",
		role: "Student",
		preferredName: "John",
		email: "john.zulu@gmail.com",
		contactNumber: "071-456-7890",
		password: "",
		classes: [
			{ name: "CompTIA Security+", duration: "June 1, 2024 - August 31, 2024" },
			{ name: "CompTIA A+", duration: "March 1, 2024 - May 31, 2024" },
		],
		upcomingTests: [
			{
				name: "CompTIA Security+ Exam",
				date: "August 25, 2024",
				time: "10:00 AM",
				link: "/scheduled-tests/compTIA",
			},
		],
	});

	const handleEditToggle = () => {
		setIsEditing(!isEditing);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setStudentInfo({ ...studentInfo, [name]: value });
	};

	return (
		<div className="student-profile-container">
			<Sidebar links={links} />
			<div className="student-profile-content">
				<h1 className="student-profile-h1">Student Profile</h1>
				<div className="student-profile-details">
					<div className="profile-header">
						<div className="profile-image">
							<img src={studentInfo.imageUrl} alt={studentInfo.name} />
						</div>
						<div className="profile-info">
							<h2>{studentInfo.name}</h2>
							<p>
								{studentInfo.gender} | {studentInfo.role}
							</p>
						</div>
					</div>

					<div className="separator" />

					<div className="profile-body">
						<div className="editable-fields">
							<label>Preferred Name:</label>
							{isEditing ? (
								<input
									type="text"
									name="preferredName"
									value={studentInfo.preferredName}
									onChange={handleInputChange}
								/>
							) : (
								<p>{studentInfo.preferredName}</p>
							)}

							<label>Email:</label>
							{isEditing ? (
								<input
									type="email"
									name="email"
									value={studentInfo.email}
									onChange={handleInputChange}
								/>
							) : (
								<p>{studentInfo.email}</p>
							)}

							<label>Contact Number:</label>
							{isEditing ? (
								<input
									type="text"
									name="contactNumber"
									value={studentInfo.contactNumber}
									onChange={handleInputChange}
								/>
							) : (
								<p>{studentInfo.contactNumber}</p>
							)}

							<label>Password:</label>
							{isEditing ? (
								<input
									type="password"
									name="password"
									value={studentInfo.password}
									onChange={handleInputChange}
									placeholder="Update password"
								/>
							) : (
								<p>******</p>
							)}
						</div>

						<div className="classes-enrolled">
							<h3>Enrolled Classes</h3>
							<ul>
								{studentInfo.classes.map((classInfo, index) => (
									<li key={index}>
										<strong>{classInfo.name}</strong> - {classInfo.duration}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="student-profile-actions"> {/**buttons don't have uniques styling!!! */}
						<button onClick={handleEditToggle}>
							{isEditing ? "Save Changes" : "Edit Profile"}
						</button>
						<button>Back</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentProfile;
