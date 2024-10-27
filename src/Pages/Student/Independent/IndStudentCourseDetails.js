import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./IndStudentCourseDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCourse } from "../../../Api/Api";

const IndStudentCourseDetails = () => {
	const links = [
		{ path: "/StudentDashboards", pathName: "Home" },
		{ path: "/IndStudentdash", pathName: "Course Details" },
	];

	const navigate = useNavigate();
	const {courseId} = useParams();
	const [loadingState, setLoadingState] = useState(true);
	const [courseData, setCourseData] = useState();

	useEffect(() => {
		const fetchSingleCourse = async () => {

			try {
				const response = await getSingleCourse(courseId);
				setCourseData(response.data);
			} catch (error) {
				console.log(error);
			}finally{
				setLoadingState(false);
			}
		};
		fetchSingleCourse();
	},[courseId]);

	// Function for button click
	const handleGenerateTest = () => {
		navigate("/IndStudentCreateTest");
	};

	if(loadingState) {
		return <div>...Loading</div>
	}

	console.log(courseData);

	return (
		<div className="indipendent-student-course-details-container">
			<Sidebar links={links} />
			<div className="indipendent-student-course-details-content">
				<h2 className="indipendent-student-course-details-h2">
					Course Information
				</h2>
				{/* Top Section: Course Image and Info */}
				<div className="indipendent-student-course-details-information-view">
					{/* Left Section: Course Image */}
					<div className="indipendent-student-course-details-course-image">
						<img
							src={`data:image/jpeg;base64,${courseData.image}`}
							alt="CompTIA Security+"
						/>
					</div>

					{/* Right Section: Course Details */}
					<div className="independent-student-course-info">
						<h2>{courseData.courseName}</h2>
						<p className="independent-student-about-course">
							{courseData.courseDescription}
						</p>

						{/* <hr className="separator" />

						<p>
							<strong>Number of Modules:</strong> 5
						</p> */}

						{/* Grey Line Separator */}
						<hr className="separator" />
					</div>
				</div>

				<div className="indipendent-student-course-details-button-div">
					<button className="indipendent-student-course-details-button" onClick={handleGenerateTest}>
						Generate Test
					</button>
				</div>
			</div>
		</div>
	);
};

export default IndStudentCourseDetails;
