import React, { useEffect, useState } from "react";
import "./CreateClass.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createClass, getCourseWithClasses } from "../../Api/Api";

export default function CreateClass() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	// State for form inputs
	const [className, setClassName] = useState("");
	const [lecturerId, setLecturerId] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [classDescription, setClassDescription] = useState("");
	const [lecturerSearch, setLecturerSearch] = useState("");
	const [lecturers, setLecturers] = useState([]);
	const [file, setFile] = useState(null);
	const [courseData, setCourseData] = useState();
	const [loadingState, setLoadingState] = useState(true);

	const navigate = useNavigate(); //for multiple use purposes
	const { courseId } = useParams();

	useEffect(() => {
		const fetchCourseDetails = async () => {
			try {
				const response = await getCourseWithClasses(courseId);
				setCourseData(response.data);
			} catch (error) {
				console.log(error.message); //everytime you work with API calls you need to try-catch.
			} finally {
				setLoadingState(false);
			}
		};
		fetchCourseDetails();
	}, [courseId]);

	//console.log(courseData);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			!className ||
			!lecturerId ||
			!startDate ||
			!endDate ||
			!classDescription //skipped !file check since we want to be able to create a class without any students.
		);

		const payload = {
			className: className,
			classDescription: classDescription,
			startDate: startDate,
			endDate: endDate,
			userId:0,
		}

		const userData = {
			classDetails: payload,
			file: file,
		}

		try {
			console.log(userData);
			//await createClass(courseId, userData);
			//navigate(`/CourseDetails/${courseId}`);
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
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

	if (loadingState) {
		return <div>...Loading</div>;
	}

	return (
		<div className="create-class-container">
			<Sidebar links={links} />
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
							<div className="create-class-form-group">
								<label htmlFor="fileUpload">Upload Student from file:</label>
								<input
									type="file"
									id="fileUpload"
									onChange={handleFileChange}
									required
								/>
							</div>
							<button type="submit" className="create-class-submit-button">
								Create Class
							</button>
						</form>
					</div>
					<div className="content-body2">
						<div>
							{" "}
							{/**no styling */}
							<img
								src={`data:image/jpeg;base64,${courseData.image}`}
								alt={courseData.courseName}
							/>
							<div>
								<h3>{courseData.courseName}</h3>
							</div>
						</div>

						<button
							className="create-class-back-buttons"
							onClick={() => navigate(`/CourseDetails/${courseId}`)}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
