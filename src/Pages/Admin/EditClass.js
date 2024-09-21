import React, { useState } from "react";
import "./EditClass.css";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";

export default function EditClass() {
	// State for form inputs
	const [className, setClassName] = useState("");
	const [lecturer, setLecturer] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const navigate = useNavigate(); //for  multiple use purposes

	const handleSubmit = (e) => {
		e.preventDefault();

		// Form validation (simple check if fields are not empty)
		if (!className || !lecturer || !startDate || !endDate) {
			alert("All fields are required!");
			return;
		}

		// Clear input fields after form submission
		setClassName("");
		setLecturer("");
		setStartDate("");
		setEndDate("");

		//alert("Form submitted successfully!");
	};

	return (
		<div className="edit-course-container">
			<AdminSidebar />
			<div className="edit-course-content">
				<h2>EditClass</h2>
				<div className="edit-course-content-body">
					<div className="content-body-half1">
						<form onSubmit={handleSubmit}>
							{/* Class Name Input */}
							<div className="form-group">
								<label htmlFor="className">Class Name:</label>
								<input
									type="text"
									id="className"
									value={className}
									onChange={(e) => setClassName(e.target.value)}
									required
								/>
							</div>

							{/* Lecturer Name Input */}
							<div className="form-group">
								<label htmlFor="lecturer">Assign Lecturer:</label>
								<input
									type="text"
									id="lecturer"
									value={lecturer}
									onChange={(e) => setLecturer(e.target.value)}
									required
								/>
							</div>

							{/* Start Date Input */}
							<div className="form-group">
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
							<div className="form-group">
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
							<button type="submit">Update Class</button>
						</form>
					</div>
					<div className="content-body-half2">
						<div className="card">
							<p>25 Students Enrolled</p>
						</div>
						<button className="buttonCancel" onClick={() => navigate("/CourseDetails")}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
}
