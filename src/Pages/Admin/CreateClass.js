import React, { useState } from "react";
import "./CreateClass.css";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";

export default function CreateClass() {
	// State for form inputs
	const [className, setClassName] = useState("");
	const [lecturer, setLecturer] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);

	const navigate = useNavigate(); //for multiple use purposes

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/Home");

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
	};

	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<div className="create-class-container">
			<AdminSidebar />
			<div className="create-class-content">
				<h2>Create Class</h2>
				<div className="class-content-body">
					<div className="content-body1">
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
					<div className="content-body2">
						<div className="form-group">
							{selectedImage && (
								<div className="image-preview">
									<img src={selectedImage} alt="Selected" />
								</div>
							)}
							<label htmlFor="classImage">Class Image:</label>
							<input
								type="file"
								id="classImage"
								accept="image/*"
								onChange={handleImageChange}
							/>
						</div>
						<div className="button-cancel-div">
							<button
								className="buttonCancel"
								onClick={() => {
									navigate("/CourseDetails");
								}}
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
