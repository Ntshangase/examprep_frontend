import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from "./AssignedClasses.module.css";
import { getLectureClasses } from "../../../Api/Api";

const AssignedClasses = () => {
	const links = [
		{ path: "/LecturerDashboard", pathName: "Home" },
		{ path: "/AddStudent", pathName: "Add Student" },
	];

	const navigate = useNavigate();

	const [loadingState, setLoadingState] = useState(true);
	const [lectureData, setLectureData] = useState();
	const { courseIndex } = useParams();

	useEffect(() => {
		const fetchLecture = async () => {
			try {
				const response = await getLectureClasses(1); //using one for test data
				setLectureData(response.data.courses[courseIndex]);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingState(false);
			}
		};
		fetchLecture();
	}, [courseIndex]);

	if (loadingState) {
		return <div>...Loading</div>;
	}

	const handleCourseClick = (id) => {
		navigate(`/ViewClass/${id}`); // Navigate to the class detail page
	};

	return (
		<div className={styles.assignedClasses}>
			<div className={styles.dashboardContent}>
				<Sidebar links={links} />
				<div className={styles.contentArea}>
					<div className={styles.banner}>
						<img
							src={`data:image/jpeg;base64,${lectureData.image}`}
							alt="Architecting on AWS"
							className={styles.courseImage}
						/>
						<div className={styles.courseInfo}>
							<h2>{lectureData.courseName}</h2>
							<p>
								{lectureData.courseDescription}
							</p>
						</div>
					</div>
					<div className={styles.activeClasses}>
						<h2>Active Classes</h2>
						<div className={styles.cardContainer}>
							{lectureData.classes.map((classes,index) => (
								<div
									className={styles.classCard}
									key={index}
									onClick={() => handleCourseClick(classes.classId)} // Use onClick for navigation
								>
									<h3>{classes.className}</h3>
									<p>{classes.classDescription}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssignedClasses;
