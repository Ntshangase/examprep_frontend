import React, { useState } from "react";
import "./EditCourse.css";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";

export default function EditCourse() {
	const [courseName, setCourseName] = useState("AWS Solutions Architect");
	const [courseDescription, setCourseDescription] = useState(
		"The course intends to prepare individuals to function as Cloud Administrators responsible for overseeing cloud platforms and computing resources."
	);
	const [domains, setDomains] = useState(["Cloud Computing", "Security", "Networking", "DevOps"]);
	const [newDomain, setNewDomain] = useState("");

	const handleCourseNameChange = (e) => setCourseName(e.target.value);
	const handleCourseDescriptionChange = (e) => setCourseDescription(e.target.value);

	const navigate = useNavigate();
	const handleUpdateCourse = () => {
		navigate("/ManageCourse");
	};

	const handleRemoveCourse = () => {
		if (window.confirm("Are you sure you want to remove this course?")) {
			alert("Course removed!");
		}
	};

	const handleImageUpload = () => {
		alert("Image upload triggered!");
	};

	// Domain handlers
	const handleNewDomainChange = (e) => setNewDomain(e.target.value);

	const handleAddDomain = () => {
		if (newDomain.trim()) {
			setDomains([...domains, newDomain.trim()]);
			setNewDomain("");
		}
	};

	const handleRemoveDomain = (indexToRemove) => {
		const updatedDomains = domains.filter((_, index) => index !== indexToRemove);
		setDomains(updatedDomains);
	};

	return (
		<div className="edit-course-container">
			<AdminSidebar />
			<div className="edit-course-wrapper">
				<h1 className="edit-course-header">Edit Course</h1>
				<div className="edit-course-form">
					<div className="edit-course-left">
						<div className="edit-course-input-group">
							<label htmlFor="courseName">Course Name</label>
							<input
								type="text"
								id="courseName"
								value={courseName}
								onChange={handleCourseNameChange}
								disabled
								className="edit-course-input"
							/>
						</div>

						<div className="edit-course-input-group">
							<label htmlFor="courseDescription">Course Description</label>
							<textarea
								id="courseDescription"
								value={courseDescription}
								onChange={handleCourseDescriptionChange}
								rows="5"
								className="edit-course-textarea"
							/>
						</div>

						<div className="edit-course-input-group">
							<label>Domains</label>
							<div className="edit-course-domain-list">
								{domains.map((domain, index) => (
									<div key={index} className="edit-course-domain-item">
										<span className="edit-course-domain">{domain}</span>
										<button
											onClick={() => handleRemoveDomain(index)}
											className="edit-course-remove-domain"
										>
											&times;
										</button>
									</div>
								))}
							</div>

							<div className="edit-course-add-domain">
								<input
									type="text"
									placeholder="Add new domain"
									value={newDomain}
									onChange={handleNewDomainChange}
									className="edit-course-input"
								/>
								<button
									onClick={handleAddDomain}
									className="edit-course-add-button"
								>
									Add Domain
								</button>
							</div>
						</div>
					</div>
					<div className="edit-course-right">
						<div className="edit-course-image-upload">
							<img
								src="/assets/aws.png"
								alt="AWS Course"
								className="edit-course-image"
							/>
							<button
								onClick={handleImageUpload}
								className="edit-course-upload-button"
							>
								Upload New Image
							</button>
						</div>

						<div className="edit-course-actions">
							<button
								onClick={handleUpdateCourse}
								className="edit-course-button update"
							>
								Update Course
							</button>
							<button
								onClick={handleRemoveCourse}
								className="edit-course-button remove"
							>
								Remove Course
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
