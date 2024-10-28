import React, { useEffect, useState } from "react";
import "./CreateClass.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
	createClass,
	getAllLectures,
	getCourseWithClasses,
} from "../../Api/Api.js";

export default function CreateClass() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	// State for form inputs
	const [className, setClassName] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [classDescription, setClassDescription] = useState("");
	const [file, setFile] = useState(null);
	const [courseData, setCourseData] = useState();
	const [loadingState, setLoadingState] = useState(true);
	const [lectureList, setLectureList] = useState([]);
	const [lecturer, setLecturer] = useState("");
	const [lectureId, setLectureId] = useState();

	const navigate = useNavigate();
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

	const fetchAllLectures = async () => {
		try {
			const response = await getAllLectures();
			setLectureList(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		if (lecturer.length > 1) {
			const delayApiCallWithEveryKey = setTimeout(() => {
				fetchAllLectures();
			}, 500);

			return () => clearTimeout(delayApiCallWithEveryKey);
		}
	}, [lecturer]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			!className ||
			!startDate ||
			!endDate ||
			!classDescription //skipped !file check since we want to be able to create a class without any students.
		);

		const payload = {
			className: className,
			classDescription: classDescription,
			startDate: startDate,
			endDate: endDate,
			userId: lectureId,
		};

		const userData = {
			//courseId:courseId,
			classDetails: JSON.stringify(payload),
			file: file,
		};

		try {
			await createClass(courseId, userData);
			alert("class succefully created..");
			//navigate(`/CourseDetails/${courseId}`);
		} catch (error) {
			console.log(error);
		}
	};

	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const getTodayDate = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so +1
		const day = String(today.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	};

	const getMinimumEndDate = () => {
		if (!startDate) return getTodayDate(); // Fallback to today's date if startDate is not set
		const minEndDate = new Date(startDate);
		minEndDate.setDate(minEndDate.getDate() + 7);
		return minEndDate.toISOString().split("T")[0];
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
									value={lecturer}
									onChange={(e) => setLecturer(e.target.value)}
									placeholder="Search by Lecturer Name"
									required
								/>
								{lectureList.length > 0 && (
									<ul className="lecturer-suggestions">
										{lectureList.map((lecture) => (
											<li
												key={lecture.id}
												onClick={() => {
													setLecturer(lecture.fullNames);
													setLectureId(lecture.id);
													setLectureList([]);
												}}
											>
												{lecture.fullNames}
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
									min={getTodayDate()}
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
									min={getMinimumEndDate()}
									value={endDate}
									onChange={(e) => setEndDate(e.target.value)}
									required
									disabled={!startDate}
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
					<div className="create-class-content-body2">
						<div>
							<img
								src={`data:image/jpeg;base64,${courseData.image}`}
								alt={courseData.courseName}
								className="create-class-image"
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
