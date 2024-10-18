import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
	faPlusCircle,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getCourseWithClasses } from "../../Api/Api";
import { useParams } from "react-router-dom";

export default function CourseDetails() {
	const links = [
		{ path: "/AdminLanding", pathName: "Home" },
		{ path: "/ManageUser", pathName: "Manage Users" },
		{ path: "/ManageCourse", pathName: "Manage Courses" },
		{ path: "/ManageClass", pathName: "Manage Classes" },
	];

	const { courseId } = useParams();
	const [classes, setClasses] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getCourseWithClasses(`/api/courses/courses/${courseId}`);
				setClasses(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [ ]);

	if (loading) {
		return <div>Loading...</div>; // Display while fetching data
	}

	return (
		<div className="admin-course-details-container">
			<Sidebar links={links} />
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
						src={`data:image/jpeg;base64,${classes.image}`}
						alt={classes.courseName}
						className="admin-course-image"
					/>
					<div className="course-text">
						<h3>{classes.courseName}</h3>
					</div>
				</div>
				<h4>Active Classes</h4>
				{classes.classes.map((course, index) => (
					<div key={index}>
						<div className="classes">
					<div>
						<div className="class-display">
							<div className="class-details">
								<p>
									<strong>Class:</strong> {course.className}
								</p>
								<p>
									<strong>Lecturer:</strong> {course.lecturerName}
								</p>
								<p>
									<strong>Duration:</strong> {course.startDate}{" -- " }{course.endDate}
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
				))}
			</div>
		</div>
	);
}
