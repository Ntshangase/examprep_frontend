import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './SubmittedTests.module.css'; // Import your CSS module (optional)

// Dummy data for submitted tests
const submittedTestsData = [
    { id: 1, name: "PrepTest201", dateSubmitted: "2024-09-10" },
    { id: 2, name: "PrepTest202", dateSubmitted: "2024-09-11" },
    { id: 3, name: "PrepTest203", dateSubmitted: "2024-09-12" },
    { id: 4, name: "PrepTest204", dateSubmitted: "2024-09-13" },
    { id: 5, name: "PrepTest205", dateSubmitted: "2024-09-14" },
];

const SubmittedTests = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleTestClick = (testId) => {
        navigate(`/StudentsSubmitted/${testId}`); // Navigate to the test details page
    };

    return (
        <div className={styles.submittedTests}>
            <Navbar />
            <div className={styles.submittedContent}>
                <Sidebar />
                <div className={styles.contentArea}>
                    <h2>Submitted Tests</h2>
                    <ul className={styles.testList}>
                        {submittedTestsData.map(test => (
                            <li key={test.id} className={styles.testItem} onClick={() => handleTestClick(test.id)}>
                                <span>{test.name}</span> - <span>{test.dateSubmitted}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubmittedTests;  
