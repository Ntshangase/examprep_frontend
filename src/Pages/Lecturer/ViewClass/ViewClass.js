import React from "react";
import { useNavigate } from "react-router-dom";
import LecturerSidebar from "../../../Components/Sidebar/LecturerSidebar";
import styles from "./ViewClass.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ViewClass = () => {
	const navigate = useNavigate();
	const handleStudentsClick = () => {
		navigate("/ViewStudents");
	};
	const handleButtonClick = () => {
		navigate("/SubmittedTests");
	};
	const handleAddStudent = () => {
		navigate("/AddStudent");
	};
	const handleCreateTest = () => {
		navigate("/TestGeneratePage");
	};

	return (
		<div className={styles.classDetails}>
			<div className={styles.dashboardContent}>
				<LecturerSidebar />
				<div className={styles.contentArea}>
					{/* Class Info Banner */}
					<div className={styles.banner}>
						<img
							src="/assets/aws patrict.png"
							alt="Architecting on AWS"
							className={styles.courseImage}
						/>
						<div className={styles.view_course_info}>
							<h2 className={styles.courseTitle}>JuneIntake2024</h2>
							<p>Duration: 01/06/2024 - 01/09/2024</p>
							<p>
								Enrolled Students:
								<button
									onClick={handleStudentsClick}
									className={styles.studentsButton}
								>
									23
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
							onClick={handleCreateTest}
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
