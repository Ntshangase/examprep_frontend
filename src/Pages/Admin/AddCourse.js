import React, { useState } from "react";
import "./AddCourse.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";

export default function AddCourse() {
	const [courseName, setCourseName] = useState("aws solutions architect");
	const [courseDescription, setCourseDescription] = useState(
		"Enter course description"
	);
	const [domains] = useState(["Domain A", "Domain B", "Domain C", "Domain D"]);

	const handleCourseNameChange = (e) => setCourseName(e.target.value);
	const handleCourseDescriptionChange = (e) =>
		setCourseDescription(e.target.value);

	const navigate = useNavigate();
	const handleUpdateCourse = () => {
		navigate("/ManageCourse");
	};

	const handleImageUpload = () => {
		alert("Image upload triggered!");
	};

	return (
		<div className="add-course-container">
			<AdminSidebar />

			<main className="add-course-main">
				<h1>Add Course</h1>
				<div className="add-course-content">
					<form className="form">
						<div className="input-group">
							<label>Course Name</label>
							<input
								type="text"
								value={courseName}
								onChange={handleCourseNameChange}
								disabled
							/>
						</div>

						<div className="input-group">
							<label>Course Description</label>
							<textarea
								value={courseDescription}
								onChange={handleCourseDescriptionChange}
								rows="5"
							/>
						</div>

						<div className="input-group">
							<label>Edit Domain Name</label>
							<div className="domain-list">
								{domains.map((domain, index) => (
									<button key={index} className="domain-button">
										{domain}
									</button>
								))}
							</div>
							<button
								onClick={handleUpdateCourse}
								className="add-course-submit-button"
							>
								Add Course
							</button>
						</div>
					</form>

					<div className="add-course-image-upload">
						<img src="/assets/aws.png" alt="AWS" className="add-course-image" />
						<button onClick={handleImageUpload} className="upload-button">
							Upload Image
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
