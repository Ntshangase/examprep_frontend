import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./IndStudentWriteTest.css";
import { getGeneratedTest } from "../../../Api/Api";
import { useSelector } from "react-redux";

const IndStudentWriteTest = () => {
	const links = [
		{ path: "/StudentDashboards", pathName: "Home" },
		{ path: "/IndStudentdash", pathName: "Course Details" },
	];

	const location = useLocation();
	const navigate = useNavigate();
	const { selectedTopics } = location.state || {};

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState({});
	const [examResults, setExamResults] = useState({});
	const [reviewResults, setReviewResults] = useState([]);
	const { testId } = useParams();
	const user = useSelector((state) => state.user.userData);
	const [question, setQuestion] = useState([]);

	// Fetch the test questions on component mount
	useEffect(() => {
		if (!user?.id) return;

		const fetchTest = async () => {
			try {
				const response = await getGeneratedTest(testId, user.id);
				const fetchedQuestions = response.data.questions || [];
				setQuestion(fetchedQuestions);
			} catch (error) {
				console.log("Error fetching test data:", error);
			}
		};
		fetchTest();
	}, [testId, user]);

	// Display loading if user data or questions aren't available
	if (!user || question.length === 0) {
		return <div>Loading...</div>;
	}

	// Function to remove duplicate answers
	const removeDuplicateAnswers = (answers) => {
		const seen = new Set();
		return answers.filter((answer) => {
			if (seen.has(answer.answerText)) {
				return false;
			}
			seen.add(answer.answerText);
			return true;
		});
	};

	// Function to handle answer selection
	const handleAnswerChange = (questionIndex, answerText) => {
		setAnswers({
			...answers,
			[questionIndex]: answerText,
		});
	};

	// Navigation functions for next and previous questions
	const handleNext = () => {
		if (currentQuestionIndex < question.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	const handlePrevious = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	// Function to handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Submitted answers:", answers);
	};

	return (
		<div className="indipendent-student-write-test-container">
			<Sidebar links={links} />
			<div className="indipendent-student-write-test-content">
				<h2 className="indipendent-student-write-test-h2">Write Your Test</h2>
				<div>
					{/* Display current question if available */}
					{question[currentQuestionIndex] && (
						<div>
							<h2>{question[currentQuestionIndex].questionText}</h2>
							{/* Remove duplicate answers before rendering */}
							{question[currentQuestionIndex].answers &&
								removeDuplicateAnswers(question[currentQuestionIndex].answers).map((answer, index) => (
									<div key={index}>
										<input
											type="radio" // Change to "checkbox" if multiple answers are allowed
											name={`question-${currentQuestionIndex}`} // Unique name per question
											value={answer.answerText} // or answer.id if you prefer an ID for the answer
											checked={answers[currentQuestionIndex] === answer.answerText} // Set checked based on state
											onChange={() => handleAnswerChange(currentQuestionIndex, answer.answerText)} // Update answer state on change
										/>
										<span id="false-answer-text">{answer.answerText}</span>
									</div>
								))}
						</div>
					)}

					{/* Navigation buttons */}
					<div className="navigation-buttons">
						<button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
							Previous
						</button>
						<button onClick={handleNext} disabled={currentQuestionIndex === question.length - 1}>
							Next
						</button>
						<button onClick={handleSubmit}>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndStudentWriteTest;
