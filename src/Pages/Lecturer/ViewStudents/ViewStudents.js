import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';
import styles from './ViewStudents.module.css'; // Import your CSS module

const ViewStudents = () => {

    const links = [
		{path: "/LecturerDashboard", pathName: "Home"},
		{path: "/AddStudent", pathName: "Add Student"}
	]

    const navigate = useNavigate();

    const handleStudentClick = (studentId) => {
        navigate(`/StudPerfom`);
    };

    const students = [
        { id: 1, firstName: "Kwenza", lastName: "Dlamini", imageUrl: "/assets/face.jpeg" },
        { id: 2, firstName: "Bob", lastName: "Smith", imageUrl: "/assets/face.jpeg" },
        { id: 3, firstName: "Charlie", lastName: "Brown", imageUrl: "/assets/face.jpeg" },
        { id: 4, firstName: "David", lastName: "Williams", imageUrl: "/assets/face.jpeg" },
        { id: 5, firstName: "Eve", lastName: "Davis", imageUrl: "/assets/face.jpeg" },
        { id: 6, firstName: "Frank", lastName: "Miller", imageUrl: "/assets/face.jpeg" },
        { id: 7, firstName: "Skofield", lastName: "Williams", imageUrl: "/assets/face.jpeg" },
        { id: 8, firstName: "Nompilo", lastName: "Davis", imageUrl: "/assets/face.jpeg" },
        { id: 9, firstName: "Alex", lastName: "Miller", imageUrl: "/assets/face.jpeg" }
    ];

    return (
        <div className={styles.viewStudents}>
            <div className={styles.studentsContent}>
                <div className={styles.sidebar}>
                <Sidebar links={links}/>
                </div>
                <div className={styles.contentArea}>
                    <h2>Students Enrolled In This Class:</h2>
                    <ul className={styles.studentList}>
                        {students.map(student => (
                            <li key={student.id} className={styles.studentItem} onClick={() => handleStudentClick(student.id)}>
                                <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`} className={styles.studentImage} />
                                <div>
                                    <p>{student.firstName} {student.lastName}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ViewStudents;
