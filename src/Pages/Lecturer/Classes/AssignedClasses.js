import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './AssignedClasses.module.css';


const AssignedClasses = () => {
    return (
        <div className={styles.assignedClasses}>
            <Navbar />
            <div className={styles.dashboardContent}>
                <Sidebar />
                <div className={styles.contentArea}>
                    <div className={styles.banner}>
                        <img src="/assets/aws patrict.png" alt="Architecting on AWS" className={styles.courseImage} />
                        <div className={styles.courseInfo}>
                            <h1>Architecting On AWS</h1>
                            <p>Architecting on AWS provides a comprehensive overview of building IT infrastructure on the AWS platform. This course is specifically designed to equip solutions architects with the knowledge and skills to effectively optimize the utilization of AWS Cloud services and integrate them into cloud-based solutions.</p>
                        </div>
                    </div>
                    <div className={styles.activeClasses}>
                        <h2>Active Classes</h2>
                        <div className={styles.cardContainer}>
                            <Link to="/ViewClass" className={styles.classCard}>
                                <h3>Intake March 2024</h3>
                                <p>Click to view details</p>
                            </Link>
                            <Link to="/class-details/june-2024" className={styles.classCard}>
                                <h3>Intake June 2024</h3>
                                <p>Click to view details</p>
                            </Link>
                            <Link to="/class-details/september-2024" className={styles.classCard}>
                                <h3>Intake September 2024</h3>
                                <p>Click to view details</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignedClasses;
