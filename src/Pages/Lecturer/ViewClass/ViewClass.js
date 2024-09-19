import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './ViewClass.module.css'; // Make sure to create and import the corresponding CSS module // Make sure to create and import the corresponding CSS module

const ClassDetailsPage = () => {
    const navigate = useNavigate();
    const handleStudentsClick = () => {

        navigate('/ViewStudents'); 
    };

    return (
        <div className={styles.classDetails}>
            <Navbar />
            <div className={styles.dashboardContent}>
                <Sidebar />
                <div className={styles.contentArea}>
                    {/* Class Info Banner */}
                    <div className={styles.banner}>
                        <img src="/assets/aws patrict.png" alt="Architecting on AWS" className={styles.courseImage} />
                        <div className={styles.courseInfo}>
                            <h1>JuneIntake2024</h1>
                            <p>Duration: 01/06/2024 - 01/09/2024</p>
                            <p> 
                            Enrolled Students:     
                        <button  onClick={handleStudentsClick} className={styles.studentsButton}>
                          23
                        </button>
                            </p>
                            <button>Submitted Tests</button>
                        </div>
                    </div>

                    {/* Scheduled Tests Section */}
                    <div className={styles.scheduledTests}>
                    <button className={styles.createTestButton}>Create Test</button>
                        <h2>Scheduled Tests</h2>
                        <div className={styles.testList}>
                            {/* Example test entries */}
                            <div className={styles.testItem}>
                                <h3>TestName01</h3>
                                <p>Due Date: 10/09/2024</p>
                                <p>Score: --/60</p>
                            </div>
                            <div className={styles.testItem}>
                                <h3>TestName02</h3>
                                <p>Due Date: 23/09/2024</p>
                                <p>Score: --/90</p>
                            </div>
                            <div className={styles.testItem}>
                                <h3>TestName03</h3>
                                <p>Due Date: 08/10/2024</p>
                                <p>Score: --/70</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetailsPage;
