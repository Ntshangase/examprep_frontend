import React, { useEffect, useState } from "react";
import "./Classes.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { getEnrolledStudentClasses } from "../../../Api/Api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Classes = () => {

	const links = [
		{path: "/StudentDashboards", pathName:"Home"},
		{path: "/Classes", pathName:"Active Classes"},
		{path: "/PanelEnrolled", pathName:"Enrolled Class"},
		{path: "/ScheduledTests", pathName:"Scheduled Test"},
		{path: "/StudentProfile", pathName:"Student Profile"},
	]

	const user = useSelector((state) => state.user.userData);
	const [loadingState, setLoadindState] = useState(true);
	const [classesData, setClassesData] = useState();

	useEffect(() => {
		const fetchEnrolledStudent = async () => {

			try{
				const response = await getEnrolledStudentClasses(user.id);
				setClassesData(response.data.courses);
			}catch(error) {
				console.log(error);
			}finally {
				setLoadindState(false);
			}
		};
		fetchEnrolledStudent();
	},[user.id]);

	console.log(classesData)
	if(loadingState) {
		return <div>...Loading</div>
	}

	return (
		<div className="classes-page">
			<div className="content">
				<Sidebar links={links}/>
				<div className="main-content">
					<h1>Active Classes</h1>
					{/* Line separator */}
					<hr className="black-separator" />
					{classesData.map((course,index) => (
						<div key={index} className="class-section">
						<p>
							<strong>
								<Link to="/PanelEnrolled" className="class-link">
								{course.classes[index].className}
								</Link>
							</strong>
						</p>
						<p>
							<strong>Class Description:</strong> {course.classes[index].classDescription}
						</p>
						<p>
							<strong>Course:</strong> {course.courseName}
						</p>
						<p>
							<strong>Duration:</strong> {course.classes[index].startDate} {"-"} {course.classes[index].endDate}
						</p>
					</div>
					))}
					{/* Line separator */}
					<hr className="black-separator" />
				</div>
			</div>
		</div>
	);
};

export default Classes;
