import React, { useState } from 'react';
import './EditClass.css';
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

export default function EditClass() {
	const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

	// State for form inputs
	const [courseName] = useState("AWS Solutions Architect"); // Read-only course name
	const [className] = useState("June Intake"); // Read-only class name
	const [lecturer, setLecturer] = useState(" Dr. J. Jumbo"); // Searchable Instructor
	const [description, setDescription] = useState(""); // New state for edit description
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const navigate = useNavigate(); // for multiple use purposes

	const handleSubmit = (e) => {
		e.preventDefault();

		// Form validation (simple check if fields are not empty)
		if (!lecturer || !description || !startDate || !endDate) {
			alert("All fields are required!");
			return;
		}

		// Clear input fields after form submission
		setLecturer("");
		setDescription(""); // Clear description
		setStartDate("");
		setEndDate("");

		//alert("Form submitted successfully!");
	};

	return (
		<div className="edit-course-container">
			<Sidebar links={links}/>
			<div className="edit-course-content">
				<h2>Edit Class</h2>
				<div className="edit-course-content-body">
					<div className="content-body-half1">
						<form className='edit-class-form' onSubmit={handleSubmit}>
							{/* Course Name (Read-only) */}
							<div className="edit-class-form-group">
								<label htmlFor="courseName">Course Name:</label>
								<input
									type="text"
									id="courseName"
									value={courseName}
									readOnly
									className="read-only-input"
								/>
							</div>

							{/* Class Name (Read-only) */}
							<div className="edit-class-form-group">
								<label htmlFor="className">Class Name:</label>
								<input
									type="text"
									id="className"
									value={className}
								/>
							</div>

							{/* Lecturer (Searchable Input) */}
							<div className="edit-class-form-group">
								<label htmlFor="lecturer">Lecturer</label>
								<input
									type="search"
									id="lecturer"
									value={lecturer}
									onChange={(e) => setLecturer(e.target.value)}
									required
									className="search-input"
								/>
							</div>

							{/* Edit Description */}
							<div className="edit-class-form-group">
								<label htmlFor="description">Edit Description:</label>
								<textarea
									id="description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									placeholder="Enter class description"
									required
								/>
							</div>

							{/* Start Date Input */}
							<div className="edit-class-form-group">
								<label htmlFor="startDate">Start Date:</label>
								<input
									type="date"
									id="startDate"
									value={startDate}
									onChange={(e) => setStartDate(e.target.value)}
									required
								/>
							</div>

							{/* End Date Input */}
							<div className="edit-class-form-group">
								<label htmlFor="endDate">End Date:</label>
								<input
									type="date"
									id="endDate"
									value={endDate}
									onChange={(e) => setEndDate(e.target.value)}
									required
								/>
							</div>

							{/* Submit Button */}
							<button className="edit-class-submit-button" onClick={() => navigate("/EditClass")}>
								Update Class
							</button>
						</form>
					</div>
					<div className="content-body-half2">
						<div className="card">
							<Link to="/ManageClassStudents" className="remove-underline">
								<h2>25</h2>
								<p>Students Enrolled</p>
							</Link>
						</div>
						<div className="cancel-button-div">
							<button
								className="edit-class-cancel-button"
								onClick={() => navigate("/CourseDetails")}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}