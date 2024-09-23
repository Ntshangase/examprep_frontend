import React from "react";
import LecturerSidebar from "../../../Components/Sidebar/LecturerSidebar";
import styles from './Analytics.module.css'; // Create a new CSS module for Analytics

const Analytics = () => {
    // Example data (replace with actual dump data)
    const analyticsData = [
        { id: 1, testName: "Test 1", averageScore: 85, participationRate: "90%" },
        { id: 2, testName: "Test 2", averageScore: 75, participationRate: "80%" },
        { id: 3, testName: "Test 3", averageScore: 90, participationRate: "95%" },
    ];

    return (
        <div className={styles['analytics']}>
            <div className={styles['analytics-content']}>
            <LecturerSidebar />
                <div className={styles['content-area']}>
                    <h2>GenerateTestPage Test</h2>
                    <p>{analyticsData.testName}</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
