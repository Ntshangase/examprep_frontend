import React, { useEffect, useState } from "react";
import "./ManageCourse.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getData } from "../../Api/Api";

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
		//removed courseId
		navigate(`/EditCourse/${x}`); // /${courseId} This will lead to a course editing page
	};

	//DATABASE

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getData("/api/courses");
				setCourseState(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	//console.log(typeof courseState);
	//console.log(courseState);

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
								src={course.image}
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
