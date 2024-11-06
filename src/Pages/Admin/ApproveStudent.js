import React, { useState, useEffect } from "react";
import "./ApproveStudent.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ApproveStudent() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" }
	];

	const [students, setStudents] = useState([]);

	// Fetch all temporary students
	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const response = await axios.get("http://localhost:8080/api/temp-students");
				// Filter students with isApproved: false
				const unapprovedStudents = response.data.filter(student => !student.isApproved);
				setStudents(unapprovedStudents);
			} catch (error) {
				console.error("Error fetching students:", error);
			}
		};
		fetchStudents();
	}, []);

	// Handle approval of a student
	const handleApprove = async (studentId) => {
		try {
			// Approve the student by sending PUT request with `isApproved` as true
			await axios.put(`http://localhost:8080/api/temp-students/approve-temp-student/${studentId}`, null, {
				params: { isApproved: true }
			});
			// Remove the approved student from the list (or refetch the list to reflect changes)
			setStudents(students.filter(student => student.id !== studentId));
			console.log("Student approved successfully");
		} catch (error) {
			console.error("Error approving student:", error);
		}
	};

	// Handle deletion of a student
	const handleDelete = async (studentId) => {
		try {
			// Delete the student by sending DELETE request
			await axios.delete(`http://localhost:8080/api/temp-students/${studentId}`);
			// Remove the deleted student from the list
			setStudents(students.filter(student => student.id !== studentId));
			console.log("Student deleted successfully");
		} catch (error) {
			console.error("Error deleting student:", error);
		}
	};

	return (
		<div className="approve-student-container">
			<Sidebar links={links} />
			<div className="approve-student-content">
				<h2>Approve Students</h2>
				{/* Render a list of unapproved students */}
				{students.length > 0 ? (
					students.map((student) => (
						<div key={student.id} className="approve-student-card">
							<img
								src={student.profileImage || "default-profile-pic.png"} // Use a default image if none exists
								alt={`${student.fullNames}'s profile`}
								className="approve-student-profile-image"
							/>
							<div className="approve-student-info">
								<p>{student.fullNames}</p>
								<p>{student.email}</p>
							</div>
							<div className="approve-student-actions">
								<FontAwesomeIcon
									icon={faCheckCircle}
									className="approve-student-approve-icon"
									onClick={() => handleApprove(student.id)} // Approve student
								/>
								<FontAwesomeIcon
									icon={faTrash}
									className="approve-student-delete-icon"
									onClick={() => handleDelete(student.id)} // Delete student
								/>
							</div>
						</div>
					))
				) : (
					<p>No students to approve.</p>
				)}
			</div>
		</div>
	);
}

export default ApproveStudent;
