import React, { useState } from "react";
import "./EditCourse.css";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";

export default function EditCourse() {
	const [courseName, setCourseName] = useState("aws solutions architect");
	const [courseDescription, setCourseDescription] = useState(
		"The course intends to prepare individuals to function as Cloud Administrators who are responsible for overseeing cloud platforms and computing resources. The curriculum emphasizes ensuring seamless cloud service delivery and maintaining security protocols to safeguard against unauthorized access, threats, and other risks."
	);
	const [domains] = useState(["Domain A", "Domain B", "Domain C", "Domain D"]);

	const handleCourseNameChange = (e) => setCourseName(e.target.value);
	const handleCourseDescriptionChange = (e) =>
		setCourseDescription(e.target.value);

	const navigate = useNavigate();
	const handleUpdateCourse = () => {
		navigate("/ManageCourse");
	};

	const handleRemoveCourse = () => {
		alert("Course removed!");
	};

	const handleImageUpload = () => {
		alert("Image upload triggered!");
	};

	return (
		<div className="edit-course-container">
			<AdminSidebar />
			<div className="edit-course-content">
				<h1 className="edit-course-content-h1">Edit Course</h1>
				<div className="edit-course-content-display">
					<div className="edit-course-content-display-half1">
						<form>
							<div className="edit-course-input-group">
								<label>Course Name</label>
								<input
									type="text"
									value={courseName}
									onChange={handleCourseNameChange}
									disabled
								/>
							</div>

							<div className="edit-course-input-group">
								<label>Course Description</label>
								<textarea
									value={courseDescription}
									onChange={handleCourseDescriptionChange}
									rows="5"
								/>
							</div>

							<div className="edit-course-input-group">
								<label>Edit Domain Name</label>
								<div className="domain-list">
									{domains.map((domain, index) => (
										<button key={index} className="domain-button">
											{domain}
										</button>
									))}
								</div>
							</div>
						</form>
					</div>
					<div className="edit-course-content-display-half2">
						<div className="edit-course-image-upload">
							<img
								src="/assets/aws.png"
								alt="AWS"
								className="edit-course-course-image"
							/>
							<button
								onClick={handleImageUpload}
								className="edit-course-upload-button"
							>
								Upload Image
							</button>
						</div>

						<div className="update-remove-buttons-div">
							<button
								onClick={handleUpdateCourse}
								className="edit-course-update-button"
							>
								Update
							</button>
							<button
								onClick={handleRemoveCourse}
								className="edit-course-delete-button"
							>
								Remove
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
