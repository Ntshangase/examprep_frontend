import React from "react";
import "./ApproveStudent.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import courses from "../../Data/Courses.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ApproveStudent() {
	const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

	return (
		<div className="approve-student-container">
			<Sidebar links={links}/>
			<div className="approve-student-content">
				<h2>Approve Students</h2>
				<div>
					<img
						src={courses[0].image}
						alt={courses[0].title}
						className="manage-class-student-course-image"
					/>
					<h3>June Intake</h3>
					<div className="approve-student-content-dody">
						<div>
							<p>Khethokwakhe Mhlaba</p>
							<p>hlulekaUzamile@gmail.com</p>
						</div>
						<div className="manage-class-student-actions">
							<FontAwesomeIcon
								icon={faCheckCircle}
								className="manage-class-student-approve-icon"
							/>
							<FontAwesomeIcon
								icon={faTrash}
								className="manage-class-student-delete-icon"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ApproveStudent;
