import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from "./ViewClass.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getClassDetails } from "../../../Api/Api";

const ViewClass = () => {

	const links = [
		{path: "/LecturerDashboard", pathName: "Home"},
		{path: "/AddStudent", pathName: "Add Student"}
	]

	const navigate = useNavigate();
	const { classId } = useParams();
	const [classData, setClassData] = useState();
	const [loadingState, setLoadingState] = useState(true);


	useEffect(() => {
		const fetchClassData = async () => {

			try {
				const response = await getClassDetails(classId);
				setClassData(response.data);
			} catch (error) {
				console.log(error);
			}finally{
				setLoadingState(false);
			}
		};
		fetchClassData();
	},[classId]);

	console.log(classData);

	const handleStudentsClick = (x) => {
		navigate(`/ViewStudents/${x}`);
	};
	const handleButtonClick = () => {
		navigate("/SubmittedTests");
	};
	const handleAddStudent = () => {
		navigate("/AddStudent");
	};
	const handleCreateTest = (courseId) => {
		navigate(`/TestGeneratePage/${courseId}`);
	};

	if(loadingState){
		return <div>...Loading</div>
	}

	return (
		<div className={styles.classDetails}>
			<div className={styles.dashboardContent}>
				<Sidebar links={links}/>
				<div className={styles.contentArea}>
					{/* Class Info Banner */}
					<div className={styles.banner}>
						<img
							src={`data:image/jpeg;base64,${classData.course.image}`}
							alt="Architecting on AWS"
							className={styles.courseImage}
						/>
						<div className={styles.view_course_info}>
							<h2 className={styles.courseTitle}>{classData.className}</h2>
							<p>Duration: {classData.startDate} - {classData.endDate}</p>
							<p>
								Enrolled Students:
								<button
									onClick={() => {handleStudentsClick(classId)}}
									className={styles.studentsButton}
								>
									{classData.students.length}
								</button>
							</p>
							<p>
								Submitted Tests:
								<button
									onClick={handleButtonClick}
									className={styles.studentsButton}
								>
									Click here to view
								</button>
							</p>

							<button
								className={styles.createTestButton}
								onClick={handleAddStudent}
							>
								Add Student
							</button>
						</div>
					</div>

					{/* Scheduled Tests Section */}
					<div className={styles.scheduledTests}>
						<button
							className={styles.createTestButton}
							onClick={() => {handleCreateTest(classData.course.courseId)}}
						>
							Create Test
						</button>
						<h2>Scheduled Tests</h2>
						<div className={styles.testList}>
							{/* Example test entries */}
							<div className={styles.newDisplay}>
								<div className={styles.testItem}>
									<h3>Database Connection </h3>
									<p>Due Date: 10/09/2024</p>
									<p>Score: --/60</p>
								</div>
								<div className={styles.newDisplayIcon}>
									<FontAwesomeIcon icon={faTimes} className={styles.newDisplayIconDelete} />
								</div>
							</div>
                            <div className={styles.newDisplay}>
								<div className={styles.testItem}>
									<h3>Database Design Test</h3>
									<p>Due Date: 10/09/2024</p>
									<p>Score: --/60</p>
								</div>
								<div className={styles.newDisplayIcon}>
									<FontAwesomeIcon icon={faTimes} className={styles.newDisplayIconDelete} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewClass;
