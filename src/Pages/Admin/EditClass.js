import React, { useEffect, useState } from 'react';
import './EditClass.css';
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editClass, getClasses, getAllLectures } from '../../Api/Api';

export default function EditClass() {
	const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

	// State for form inputs
	const [courseName, setCourseName] = useState("");
	const [className, setClassName] = useState("");
	const [lecturer, setLecturer] = useState("");
	const [description, setDescription] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [courseId, setCourseId] = useState();
	const [loadingState, setLoadingState] = useState();
	const [lectureList, setLectureList] = useState([]);
	const [lectureId, setLectureId] = useState();
	const {classesId} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchClassData = async () => {

			try{
				const response = await getClasses(`/api/classes/with-students/${classesId}`);

				//prefill form
				setCourseName(response.data.course.courseName);
				setClassName(response.data.className);
				setLecturer(response.data.lecturer.fullName)
				setDescription(response.data.classDescription);
				setStartDate(response.data.startDate);
				setEndDate(response.data.endDate);
				setCourseId(response.data.course.courseId)
			}catch(error){
				console.log(error.message);
			}finally{
				setLoadingState(false);
			}
		};
		fetchClassData();
	}, [classesId]);

	const payload = {
		className: className,
  		classDescription: description,
  		startDate: startDate,
  		endDate: endDate,
		lecturerId: lectureId,
	}

	const fetchAllLectures = async () => {
		try {
			const response = await getAllLectures();
			setLectureList(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		if (lecturer.length < 2) {
			const delayApiCallWithEveryKey = setTimeout(() => {
				fetchAllLectures();
			}, 500);

			return () => clearTimeout(delayApiCallWithEveryKey);
		}
	}, [lecturer]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Form validation (simple check if fields are not empty)
		if (!lecturer || !description || !startDate || !endDate) {
			alert("All fields are required!");
			return;
		}

		try{
			await editClass(classesId,payload);
		}catch(error){
			console.log(error.message);
		}

		alert("Form submitted successfully!");
		navigate(`/CourseDetails/${courseId}`);
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

							<div className="edit-class-form-group">
								<label htmlFor="className">Class Name:</label>
								<input
									type="text"
									id="className"
									value={className}
									onChange={(e) => setClassName(e.target.value)}
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
									placeholder="Search by Lecturer Name"
									required
								/>
								{lectureList.length > 0 && (
									<ul className="edit-class-lecturer-suggestions">
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
							<button className="edit-class-submit-button" type='submit'>
								Update Class
							</button>
						</form>
					</div>
					<div className="edit-class-content-body-half2">
						<div className="edit-class-card">
							<Link to={`/ManageClassStudents/${classesId}`} className="remove-underline">
								<p>Students Enrolled</p>
							</Link>
						</div>
						<div className="edit-class-cancel-button-div">
							<button
								className="edit-class-cancel-button"
								onClick={() => navigate(`/CourseDetails/${courseId}`)}
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