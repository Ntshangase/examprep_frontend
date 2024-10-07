import React from "react";
import "./ManageCourse.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import course from "../../Data/Course.json";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ManageCourse() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const navigate = useNavigate();

	const handleEditCourse = () => {
		//removed courseId
		navigate(`/EditCourse`); // /${courseId} This will lead to a course editing page
	};

	return (
		<div className="manage-course-container">
			<Sidebar links={links} />
			<div className="manage-course-content">
				<div className="admin-manage-course-heading">
					<h2>Course Details</h2>
					<div className="link-div">
						<Link to="/AddCourse">
							<FontAwesomeIcon icon={faPlusCircle} className="icon-plus" />
						</Link>
					</div>
				</div>
				<div className="manage-courses-grid">
					{course.map((course) => (
						<div key={course.id} className="manage-course-card">
							<img
								src={course.image}
								alt={course.title}
								className="manage-course-image"
							/>
							<h3 className="manage-course-name">{course.title}</h3>
							<button
								className="edit-course-button"
								onClick={() => handleEditCourse(course.id)}
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
