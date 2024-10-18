import React from "react";
import "./CourseDetails.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import courses from "../../Data/Courses.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
	faPlusCircle,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CourseDetails() {
	const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

	console.log(courses);

	return (
		<div className="admin-course-details-container">
			<Sidebar links={links}/>
			<div className="admin-course-detail-content">
				<div className="admin-course-detail-heading">
					<h2>Course Details</h2>
					<div className="link-div">
					<Link to="/CreateClass">
						<FontAwesomeIcon icon={faPlusCircle} className="icon-plus" />
					</Link>
					</div>
				</div>
				<div className="admin-course-info">
					<img
						src={courses[0].image}
						alt={courses[0].title}
						className="admin-course-image"
					/>
					<div className="course-text">
						<h3>{courses[0].title}</h3>
					</div>
				</div>
				<h4>Active Classes</h4>
				<div className="classes">
					<div>
						<div className="class-display">
							<div className="class-details">
								<p>
									<strong>Class:</strong> June Intake{" "}
								</p>
								<p>
									<strong>Lecturer:</strong> Dr. J. Jumbo
								</p>
								<p>
									<strong>Duration:</strong> 01/06/2024 - 01/09/2024
								</p>
							</div>
							<div className="class-details-emoji">
								<Link to="/EditClass">
									<FontAwesomeIcon icon={faEye} className="icon-eye" />
								</Link>
								<FontAwesomeIcon icon={faTrash} className="icon-delete" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
