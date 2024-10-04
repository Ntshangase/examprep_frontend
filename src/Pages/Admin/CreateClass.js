import React, { useState } from "react";
import "./CreateClass.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import courses from "../../Data/Courses.json";

export default function CreateClass() {
	// State for form inputs
	const [className, setClassName] = useState("");
	const [lecturerId, setLecturerId] = useState(""); // Changed to store lecturer ID
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [classDescription, setClassDescription] = useState(""); // Added class description state
	const [selectedImage, setSelectedImage] = useState(null);
	const [lecturerSearch, setLecturerSearch] = useState(""); // State for searching lecturers
	const [lecturers, setLecturers] = useState([]); // Mock data for lecturers
	const [file, setFile] = useState(null);

	const navigate = useNavigate(); //for multiple use purposes

	const handleSubmit = (e) => {
		e.preventDefault();
		// Form validation
		if (
			!className ||
			!lecturerId ||
			!startDate ||
			!endDate ||
			!classDescription
		) {
			alert("All fields are required!");
			return;
		}

		// Clear input fields after form submission
		setClassName("");
		setLecturerId("");
		setStartDate("");
		setEndDate("");
		setClassDescription("");
		navigate("/Home");
	};
	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	const handleLecturerSearch = (e) => {
		setLecturerSearch(e.target.value);
		// You can implement actual API call or filtering logic here
		// For now, we will use mock data to demonstrate functionality
		const allLecturers = [
			{ name: "John Doe" },
			{ name: "Jane Smith" },
			{ name: "Alice Johnson" },
		];
		const filteredLecturers = allLecturers.filter((lecturer) =>
			lecturer.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setLecturers(filteredLecturers);
	};

	const handleLecturerSelect = (lecturer) => {
		setLecturerId(lecturer.id);
		setLecturerSearch(lecturer.name); // Set the search input to the selected lecturer's name
		setLecturers([]); // Clear the list after selection
	};

	const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

	return (
		<div className="create-class-container">
			<Sidebar links={links}/>
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
							{/* Lecturer ID Input */}
							<div className="form-group">
								<label htmlFor="lecturer">Assign Lecturer:</label>
								<input
									type="text"
									id="lecturer"
									value={lecturerSearch}
									onChange={handleLecturerSearch}
									placeholder="Search by Lecturer ID or Name"
									required
								/>
								{lecturers.length > 0 && (
									<ul className="lecturer-suggestions">
										{lecturers.map((lecturer) => (
											<li
												key={lecturer.id}
												onClick={() => handleLecturerSelect(lecturer)}
											>
												{lecturer.name} (ID: {lecturer.id})
											</li>
										))}
									</ul>
								)}
							</div>
							{/* Class Description Input */}
							<div className="form-group">
								<label htmlFor="classDescription">Class Description:</label>
								<textarea
									id="classDescription"
									value={classDescription}
									onChange={(e) => setClassDescription(e.target.value)}
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

	{/* File Upload Input */}
	<div className="create-class-form-group">
	<label htmlFor="fileUpload">Upload Student from file:</label>
	<input
		type="file"
		id="fileUpload"
		onChange={handleFileChange}
		required
	/>
</div>
							{/* Submit Button */}
							<button type="submit" className="create-class-submit-button">
								Create Class
							</button>
						</form>
					</div>
					<div className="content-body2">
						<div>	{/**no styling */}
							<img src={courses[0].image} alt={courses[0].title} />
							<div>
								<h3>{courses[0].title}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
