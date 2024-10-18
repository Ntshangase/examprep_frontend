import React, { useEffect, useState } from "react";
import "./ManageCourse.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getCourse } from "../../API/Api.js";

export default function ManageCourse() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const navigate = useNavigate();
	const [courseState, setCourseState] = useState([]);

	const handleEditCourse = (x) => {
		navigate(`/EditCourse/${x}`);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getCourse("/api/courses");
				setCourseState(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="manage-course-container">
			<Sidebar links={links} />
			<div className="manage-course-content">
				<div className="admin-manage-course-heading">
					<h2>Course Details</h2>
					<Link to="/AddCourse">
						<FontAwesomeIcon icon={faPlusCircle} className="manage-course-icon-plus" />
					</Link>
				</div>
				<div className="manage-courses-grid">
					{courseState.map((course) => (
						<div key={course.courseId} className="manage-course-card">
							<img
								src={`data:image/jpeg;base64,${course.image}`}
								alt={course.courseName}
								className="manage-course-image"
							/>
							<h3 className="manage-course-name">{course.courseName}</h3>
							<button
								className="edit-course-button"
								onClick={() => handleEditCourse(course.courseId)}
							>
								Edit Course
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
