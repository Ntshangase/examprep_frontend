import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './ViewClass.module.css'; 

const ViewClass = () => {
    const navigate = useNavigate();
    
    // State for holding the test data
    const [tests, setTests] = useState([]);

    // Populate tests data on component mount
    useEffect(() => {
        const testsData = [
            { id: 101, name: "Test 1", status: "Not submitted", grade: 60 },
            { id: 102, name: "PracticeTest01", status: "Not submitted", grade: 80 },
            { id: 103, name: "DomainsTest01", status: "Not submitted", grade: 60 },
            { id: 104, name: "FinalTest01", status: "Not submitted", grade: 100 }
        ];
        setTests(testsData);
    }, []);

    const handleStudentsClick = () => {
        navigate('/ViewStudents'); 
    };
    const handleButtonClick = () => {
        navigate('/StudentsSubmitted'); 
    };
    const handleAddStudent = () => {
        navigate('/AddStudent');
    };
    const handleCreateTest = () => {
        navigate('/TestGeneratePage');
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
                                <button onClick={handleStudentsClick} className={styles.studentsButton}>
                                    23
                                </button>
                            </p>
                            <p>
                                Submitted Tests:
                                <button onClick={handleButtonClick} className={styles.studentsButton}>Click here to view</button>
                            </p>
                            <button className={styles.createTestButton} onClick={handleAddStudent}>Add Student</button>
                        </div>
                    </div>

                    {/* Scheduled Tests Section */}
                    <div className={styles.scheduledTests}>
                        <button className={styles.createTestButton} onClick={handleCreateTest}>Create Test</button>
                        <h2>Scheduled Tests</h2>
                        <div className={styles.testList}>
                            {/* Dynamically render test data */}
                            {tests.map(test => (
                                <div key={test.id} className={styles.testItem}>
                                    <h3>{test.name}</h3>
                                    <p>Status: {test.status}</p>
                                    <p>Total Score: /{test.grade}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewClass;
