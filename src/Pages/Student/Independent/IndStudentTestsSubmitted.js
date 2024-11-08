import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { getTestSubmissionDetails } from "../../../Api/Api"; // Assuming you have an API to fetch test submissions
import "./IndStudentViewTestSubmission.css";
import { useSelector } from "react-redux";

const IndStudentViewTestSubmission = () => {
    const links = [
        { path: "/IndStudentCourses", pathName: "Home" },
        { path: "/IndStudentSubmittedTests", pathName: "Submitted Tests" },
    ];

    const { testId: paramTestId } = useParams();
    const testId = paramTestId && !isNaN(parseInt(paramTestId, 10)) ? parseInt(paramTestId, 10) : null;
    const user = useSelector((state) => state.user.userData);

    const [submission, setSubmission] = useState(null);
    
    useEffect(() => {
        if (!user?.id || testId === null) {
            console.warn("User ID or testId is Invalid");
            return;
        }

        const fetchSubmission = async () => {
            try {
                const response = await getTestSubmissionDetails(testId, user.id);
                setSubmission(response.data); // Assume response contains test submission details
            } catch (error) {
                console.error("Error fetching submission data:", error);
            }
        };
        
        fetchSubmission();
    }, [testId, user]);

    if (!submission) {
        return <div>Loading submission data...</div>;
    }

    return (
        <div className="indipendent-student-view-test-container">
            <Sidebar links={links} />
            <div className="indipendent-student-view-test-content">
                <h2 className="indipendent-student-view-test-h2">Test Submission Details</h2>
                
                <div className="submission-summary">
                    <p><strong>Test Title:</strong> {submission.testTitle}</p>
                    <p><strong>Submitted On:</strong> {submission.submissionDate}</p>
                    <p><strong>Score:</strong> {submission.score} / {submission.totalScore}</p>
                </div>

                <div className="submission-questions">
                    {submission.questions.map((question, index) => (
                        <div key={index} className="question-item">
                            <h3>{question.questionText}</h3>
                            <p><strong>Your Answer:</strong> {question.selectedAnswer}</p>
                            <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
                            <p><strong>Explanation:</strong> {question.explanation || "No explanation provided."}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndStudentViewTestSubmission;
