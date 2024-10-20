import React, { useEffect, useState } from 'react';
import './EditClass.css';
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getClasses } from '../../Api/Api';

export default function EditClass() {
	const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

	// State for form inputs
	const [courseName, setCourseName] = useState(""); // Read-only course name
	const [className, setClassName] = useState(""); // Read-only class name
	const [lecturer, setLecturer] = useState(""); // Searchable Instructor
	const [description, setDescription] = useState(""); // New state for edit description
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [classData, setClassData] = useState();
	const [loadingState, setLoadingState] = useState();
	const {classesId} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchClassData = async () => {

			try{
				const response = await getClasses(`/api/classes/with-students/${classesId}`);
				setClassData(response.data);

				//prefill form
				setCourseName(response.data.course.courseName);
				setClassName(response.data.className);
				//missing lecture from data.
				setDescription(response.data.classDescription);
				//missing start and end Date from API.
			}catch(error){
				console.log(error.message);
			}finally{
				setLoadingState(false);
			}
		};
		fetchClassData();
	}, [classesId]);

	console.log(classData);

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

	if(loadingState){
		return <div>...Loading</div>;
	}

	return (
		<div className="edit-class-container">
			<Sidebar links={links}/>
			<div className="edit-class-content">
				<h2 className='edit-class-content h2'>Edit Class</h2>
				<div className="edit-class-content-body">
					<div className="edit-class-content-body-half1">
						<form className='edit-class-form' onSubmit={handleSubmit}>
							{/* Course Name (Read-only) */}
							<div className="edit-class-form-group">
								<label htmlFor="courseName">Course Name:</label>
								<input
									type="text"
									id="courseName"
									value={courseName}
									readOnly
									className="edit-class-read-only-input"
								/>
							</div>

							{/* Class Name (Read-only) */}
							<div className="edit-class-form-group">
								<label htmlFor="className">Class Name:</label>
								<input
									type="text"
									id="className"
									value={className}
									readOnly
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
									className="edit-class-search-input"
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
					<div className="edit-class-content-body-half2">
						<div className="edit-class-card">
							<Link to="/ManageClassStudents" className="remove-underline">
								<h2>25</h2>
								<p>Students Enrolled</p>
							</Link>
						</div>
						<div className="edit-class-cancel-button-div">
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