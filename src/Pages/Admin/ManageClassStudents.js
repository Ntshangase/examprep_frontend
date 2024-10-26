import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ManageClassStudents.css";
import { useNavigate, useParams } from "react-router-dom";
import { getClasses } from "../../Api/Api";

export default function ManageClassStudents() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const { classesId } = useParams();
	const [classData, setClassData] = useState();
	const [loadingState, setLoadingState] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getClasses(
					`/api/classes/with-students/${classesId}`
				);
				setClassData(response.data);
			} catch (error) {
				console.log(error.message);
			}finally{
				setLoadingState(false);
			}
		};
		fetchData();
	},[classesId]);

	console.log(classData);

	const navigate = useNavigate();
	const handleApproveStudent = () => {
		navigate("/ApproveStudent");
	};

	if(loadingState){
		return <div>...Loading</div>
	}

	return (
		<div className="manage-class-student-container">
			<Sidebar links={links} />
			<div className="manage-class-student-content">
				<h2 className="manage-class-student-content-h2">Manage Students</h2>
				<div className="manage-class-student-course-info">
					<img
						src={`data:image/jpeg;base64,${classData.course.image}`}
						alt={classData.course.courseName}
						className="manage-class-student-course-image"
					/>
					<h3>{classData.course.courseName}</h3>
					<button
						onClick={handleApproveStudent}
						className="manage-class-student-approve-button"
					>
						View Students to be Approved
					</button>
				</div>
				<div className="manage-class-student-list">
					{" "}
					{/**Display students */}
					<h2>Enrolled Students</h2>
					{classData.students.map((student,index) => (
						<div key={index} className="manage-class-student-item">
							<div>
							<span>{student.fullName}{" "}{student.surname}</span>
							<h4>{student.email}</h4>
							<p>{student.contactNumber}</p>
							</div>
							{/* <FontAwesomeIcon
								icon={faTrash}
								className="manage-class-student-delete-icon"
								onClick={() => handleDelete(student.id)}
							/> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
