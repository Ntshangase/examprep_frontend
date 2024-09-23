import React from "react"; 
//import { useParams } from "react-router-dom"; // Import useParams for routing
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import style from "./StudentsSubmitted.module.css"; // Ensure the correct path for CSS

// Dummy data for the test and submitted students
const testData = {
    id: 1,
    name: "TestPep200",
    submissions: [
        { studentName: "Alice Johnson", status: "Submitted",dateSubmitted:"15/09/2024", score: 85, totalGrade: 100 },
        { studentName: "Bob Smith", status: "Submitted",dateSubmitted:"16/09/2024", score: 90, totalGrade: 100 },
        { studentName: "Charlie Brown", status: "Submitted",dateSubmitted:"17/09/2024", score: 78, totalGrade: 100 },
        { studentName: "David Williams", status: "Submitted",dateSubmitted:"18/09/2024", score: 88, totalGrade: 100 },
        { studentName: "Eve Davis", status: "Submitted",dateSubmitted:"19/09/2024", score: 92, totalGrade: 100 },
    ],
        id: 1,
    name: "TestPep200",
    submissions: [
        { studentName: "Alice Johnson", status: "Submitted",dateSubmitted:"15/09/2024", score: 85, totalGrade: 100 },
        { studentName: "Bob Smith", status: "Submitted",dateSubmitted:"16/09/2024", score: 90, totalGrade: 100 },
        { studentName: "Charlie Brown", status: "Submitted",dateSubmitted:"17/09/2024", score: 78, totalGrade: 100 },
        { studentName: "David Williams", status: "Submitted",dateSubmitted:"18/09/2024", score: 88, totalGrade: 100 },
        { studentName: "Eve Davis", status: "Submitted",dateSubmitted:"19/09/2024", score: 92, totalGrade: 100 },
    ]
};

const StudentsSubmitted = () => {
    //const { testId } = useParams(); // Get the test ID from the URL

    // You can fetch the actual test data based on testId here

    return (
        <div className={style.studentsSubmitted}>
            <Navbar />
            <div className={style.submittedStudentsContent}>
                <Sidebar />
                <div className={style.contentArea}>
                    <h2>{testData.name}</h2> {/* Display the test name as a header */}
                    <table className={style.submissionTable}>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Status</th>
                                <th>Date Submitted</th>
                                <th>Scored</th>
                                <th>Total Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testData.submissions.map((submission, index) => (
                                <tr key={index}>
                                    <td>{submission.studentName}</td>
                                    <td>{submission.status}</td>
                                    <td>{submission.dateSubmitted}</td>
                                    <td>{submission.score}</td>
                                    <td>{submission.totalGrade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentsSubmitted;
