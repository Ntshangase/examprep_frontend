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
		<div className="container">
			<AdminSidebar />
			<main className="main">
				<h1>Edit Course</h1>
				<div className="content">
					<div className="content-div">
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
						</div>
					</form>

					<div className="image-upload">
						<img src="/assets/aws.png" alt="AWS" className="course-image" />
						<button onClick={handleImageUpload} className="upload-button">
							Upload Image
						</button>
					</div>
          </div>

					<div className="update-remove-buttons">
						<button onClick={handleUpdateCourse} className="update-button">
							Update
						</button>
						<button onClick={handleRemoveCourse} className="edit-delete-button">
							Remove
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
