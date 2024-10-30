import React, { useEffect, useState } from "react";
import CourseCard from "../../../Components/CourseCard/CourseCard";
import "./LecturerDashboard.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { getLectureClasses } from "../../../Api/Api";
import { useSelector } from "react-redux";

const LecturerDashboard = () => {
	const links = [
		{ path: "/LecturerDashboard", pathName: "Home" },
		{ path: "/AddStudent", pathName: "Add Student" },
	];

	const [loadingState, setLoadingState] = useState(true);
	const [lectureData, setLectureData] = useState();
	const user = useSelector((state) => state.user.userData);

	useEffect(() => {
		const fetchLecture = async () => {
			try {
				const response = await getLectureClasses(user.id);
				setLectureData(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingState(false);
			}
		};
		fetchLecture();
	}, [user.id]);

	if (loadingState) {
		return <div>...Loading</div>;
	}

	return (
		<div className="lecturer-dashboard-container">
			<Sidebar links={links} />
			<div className="lecture-dashboard-content-area">
				<h1 className="lecture-dashboard-h1">Courses</h1>
				<div className="lecture-dashboard-courses-grid">
					{lectureData.courses.map((course,index) => (
						<CourseCard
							key={course.courseId}
							id={index}
							title={course.courseName}
							image={`data:image/jpeg;base64,${course.image}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LecturerDashboard;
