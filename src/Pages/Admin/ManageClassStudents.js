import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ManageClassStudents.css";
import courses from "../../Data/Courses.json";
import { useNavigate } from "react-router-dom";

export default function ManageClassStudents() {
	const links = [
		{path: "/AdminLanding", pathName: "Home"},
		{path: "/ManageUser", pathName: "Manage Users"},
		{path: "/ManageCourse", pathName: "Manage Courses"},
		{path: "/ManageClass", pathName: "Manage Classes"}
	]

	const [students, setStudents] = useState([
		{ id: 1, name: "Simphiwe Ntshangasee" },
		{ id: 2, name: "Bravery  Mayor" },
		{ id: 3, name: "Branvado Ngobeni " },
	]);

	const handleDelete = (id) => {
		setStudents(students.filter((student) => student.id !== id));
	};

	const navigate = useNavigate();
	const handleApproveStudent = () => {
		navigate("/ApproveStudent");
	};

	return (
		<div className="manage-class-student-container">
			<Sidebar links={links}/>
			<div className="manage-class-student-content">
				<h2>Manage Students</h2>
				<div className="manage-class-student-course-info">
					<img
						src={courses[0].image}
						alt={courses[0].title}
						className="manage-class-student-course-image"
					/>
					<h3>June Intake</h3>
					<button
						onClick={handleApproveStudent}
						className="manage-class-student-approve-button"
					>
						Approve Student
					</button>
				</div>
				<div className="manage-class-student-list">
					{" "}
					{/**Display students */}
					{students.map((student) => (
						<div key={student.id} className="manage-class-student-item">
							<span>{student.name}</span>
							<FontAwesomeIcon
								icon={faTrash}
								className="manage-class-student-delete-icon"
								onClick={() => handleDelete(student.id)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
