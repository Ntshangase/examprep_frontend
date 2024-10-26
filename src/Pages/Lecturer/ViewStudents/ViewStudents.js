import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ViewStudents.module.css'; // Import your CSS module
import { getClassDetails } from "../../../Api/Api";

const ViewStudents = () => {

    const links = [
		{path: "/LecturerDashboard", pathName: "Home"},
		{path: "/AddStudent", pathName: "Add Student"}
	]

    const navigate = useNavigate();
    const { classId } = useParams();
    const [classData, setClassData] = useState();
    const [loadingState, setLoadingState] = useState(true);

    const handleStudentClick = () => {
        navigate(`/StudPerfom`);
    };

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

    if(loadingState) {
        return <div>...Loading</div>
    }

    return (
        <div className={styles.viewStudents}>
            <div className={styles.studentsContent}>
                <div className={styles.sidebar}>
                <Sidebar links={links}/>
                </div>
                <div className={styles.contentArea}>
                    <h2>Students Enrolled In This Class:</h2>
                    <ul className={styles.studentList}>
                        {classData.students.map((student, index) => (
                            <li key={index} className={styles.studentItem} onClick={() => handleStudentClick(student.studentId)}>
                                <img src={`data:image/jpeg;base64,${student.image}`} alt={student.fullName} className={styles.studentImage} />
                                <div>
                                    <p>{student.fullName} {" "} {student.surname}</p>
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
