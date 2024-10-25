import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './AssignedClasses.module.css';
import { getLectureClasses } from "../../../Api/Api";

const AssignedClasses = () => {

    const links = [
		{path: "/LecturerDashboard", pathName: "Home"},
		{path: "/AddStudent", pathName: "Add Student"}
	]

    const navigate = useNavigate();

    const [loadingState, setLoadingState] = useState(true);
	const [lectureData, setLectureData] = useState();

	useEffect(() => {
		const fetchLecture = async () => {

			try {
				const response = await getLectureClasses(1);	//using one for test data
				setLectureData(response.data)
			} catch (error) {
				console.log(error);
			}finally {
				setLoadingState(false);
			}

		}
		fetchLecture();
	},[]);

	console.log(lectureData);

	if(loadingState) {
		return <div>...Loading</div>
	}

    const classes = [
        {
            id: 1,
            name: "Intake March 2024",
            description: "Click to view details"
        },
        {
            id: 2,
            name: "Intake June 2024",
            description: "Click to view details"
        },
        {
            id: 3,
            name: "Intake September 2024",
            description: "Click to view details"
        }
        ,
        {
            id: 4,
            name: "Intake October 2024",
            description: "Click to view details"
        }
        
    ];

    const handleCourseClick = (id) => {
        navigate(`/ViewClass/${id}`); // Navigate to the class detail page
    };

    return (
        <div className={styles.assignedClasses}>
            <div className={styles.dashboardContent}>
            <Sidebar links={links}/>
                <div className={styles.contentArea}>
                    <div className={styles.banner}>
                        <img src="/assets/aws patrict.png" alt="Architecting on AWS" className={styles.courseImage} />
                        <div className={styles.courseInfo}>
                            <h2>Architecting On AWS</h2>
                            <p>Architecting on AWS provides a comprehensive overview of building IT infrastructure on the AWS platform. This course is specifically designed to equip solutions architects with the knowledge and skills to effectively optimize the utilization of AWS Cloud services and integrate them into cloud-based solutions.</p>
                        </div>
                    </div>
                    <div className={styles.activeClasses}>
                        <h2>Active Classes</h2>
                        <div className={styles.cardContainer}>
                            {classes.map((cls) => (
                                <div 
                                    className={styles.classCard} 
                                    key={cls.id} 
                                    onClick={() => handleCourseClick(cls.id)} // Use onClick for navigation
                                >
                                    <h3>{cls.name}</h3>
                                    <p>{cls.description}</p>
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
