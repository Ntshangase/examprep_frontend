import React from "react";
import "./CourseDetails.css";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import courses from "../../Data/Courses.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CourseDetails() {
	return (
		<div className="course-details-container">
			<AdminSidebar />
			<div className="course-detail-content">
				<h2>Course Details</h2>
				<div className="course-info">
					<img
						src={courses[0].image}
						alt={courses[0].title}
						className="course-image"
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
									<strong>Instructor:</strong> Dr. J. Jumbo
								</p>
								<p>
									<strong>Duration:</strong> 01/06/2024 - 01/09/2024
								</p>
							</div>
							<div className="class-details-emoji">
								<Link to="/EditClass">
									<FontAwesomeIcon icon={faEye} className="icon-eye" />
								</Link>
								<FontAwesomeIcon icon={faTimes} className="icon-delete" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
