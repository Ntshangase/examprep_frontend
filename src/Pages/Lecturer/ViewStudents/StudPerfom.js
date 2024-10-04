import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import styles from './StudPerfom.module.css';

const StudPerfom = () => {

    const links = [
		{path: "/LecturerDashboard", pathName: "Home"},
		{path: "/AddStudent", pathName: "Add Student"}
	]

    const { studentId } = useParams();
    const [student, setStudent] = useState(null);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        // Simulate fetching student data
        const fetchStudentData = async () => {
            // Hardcoded student data
            const studentData = {
                id: 1,
                firstName: "Alice",
                lastName: "Johnson"
            };
            setStudent(studentData);

            // Simulate fetching tests data
            const testsData = [
                { id: 101, name: "Test 1", status: "Submitted",scored:56, grade: 60},
                { id: 102, name: "PracticeTest01", status: "Not submitted",scored:10, grade: 80 },
                { id: 103, name: "DomainsTest01", status: "Submitted",scored:36, grade: 60 },
                { id: 104, name: "FinalTest01", status: "Not submitted",scored:60, grade: 100}
            ];
            setTests(testsData);
        };

        fetchStudentData();
    }, [studentId]);

    if (!student) return <p>Loading...</p>;

    return (
        <div className={styles.studPerfom}>
            <div className={styles.content}>
            <Sidebar links={links}/>
                <div className={styles.mainContent}>
                    <h2>{student.firstName} {student.lastName}</h2>
                    <table className={styles.testTable}>
                        <thead>
                            <tr>
                                <th>Test Name</th>
                                <th>Status</th>
                                <th>Scored</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tests.map(test => (
                                <tr key={test.id}>
                                    <td>{test.name}</td>
                                    <td>{test.status}</td>
                                    <td>{test.scored !== null ? test.scored : 'N/A'}</td>
                                    <td>{test.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudPerfom;
