import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./IndStudentWriteTest.css";

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
	const [showModal, setShowModal] = useState(false);
	const [examResults, setExamResults] = useState({});
	const [reviewResults, setReviewResults] = useState([]); // New state for review results

	// Generate a list of questions from the selected topics
	const questions = [];

	if (!selectedTopics) {
		return <p>No questions selected. Please go back and create a test.</p>;
	}

	Object.keys(selectedTopics).forEach((domainTitle) => {
		const topics = selectedTopics[domainTitle];
		Object.keys(topics).forEach((topic) => {
			const numQuestions = topics[topic];
			if (numQuestions > 0) {
				for (let idx = 0; idx < numQuestions; idx++) {
					const questionType =
						Math.random() > 0.5 ? "multiple-choice" : "true-false";
					const questionContent = `Question ${
						idx + 1
					}: ${topic} - What is the definition of XYZ?`;
					const correctAnswer =
						questionType === "multiple-choice" ? "Option A" : "True"; // Example correct answers
					const explanation = `Explanation for the correct answer: ${correctAnswer}`; // Explanation

					questions.push({
						domain: domainTitle,
						topic: topic,
						question: questionContent,
						type: questionType,
						options:
							questionType === "multiple-choice"
								? ["Option A", "Option B", "Option C", "Option D"]
								: ["True", "False"],
						correctAnswer,
						explanation,
					});
				}
			}
		});
	});

	const handleNext = () => {
		setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
	};

	const handleMultipleChoiceChange = (event) => {
		setAnswers({
			...answers,
			[currentQuestionIndex]: event.target.value,
		});
	};

	const handleSubmit = () => {
		const totalQuestions = questions.length;
		const marks = Object.keys(answers).length; // Example for marks based on answered questions
		const timeTaken = "20 minutes"; // Replace with actual time tracking logic
		const dateTaken = new Date().toLocaleString();

		// Prepare review results
		const review = questions.map((question, index) => ({
			question: question.question,
			userAnswer: answers[index],
			correctAnswer: question.correctAnswer,
			isCorrect: answers[index] === question.correctAnswer,
			explanation: question.explanation,
		}));

		setExamResults({
			user: "John Doe", // Replace with the actual logged-in user info
			timeTaken,
			dateTaken,
			totalQuestions,
			marks,
		});
		setReviewResults(review);
		setShowModal(true);
	};

	const closeModalAndNavigate = () => {
		navigate("/TestReview", {
			state: {
				reviewResults,
				examResults,
			},
		});
	};

	return (
		<div className="indipendent-student-write-test-container">
			<Sidebar links={links} />
			<div className="indipendent-student-write-test-content">
				<h2 className="indipendent-student-write-test-h2">Write Your Test</h2>
				{currentQuestionIndex < questions.length ? (
					<div className="indipendent-student-write-test-question-section">
						<h3>{questions[currentQuestionIndex].domain}</h3>
						<p>{questions[currentQuestionIndex].question}</p>
						{questions[currentQuestionIndex].type === "multiple-choice" ? (
							<div>
								{questions[currentQuestionIndex].options.map(
									(option, index) => (
										<label key={index}>
											<input
												type="radio"
												name={`question-${currentQuestionIndex}`}
												value={option}
												checked={answers[currentQuestionIndex] === option}
												onChange={handleMultipleChoiceChange}
											/>
											{option}
										</label>
									)
								)}
							</div>
						) : (
							<div>
								<label>
									<input
										type="radio"
										name={`question-${currentQuestionIndex}`}
										value="True"
										checked={answers[currentQuestionIndex] === "True"}
										onChange={handleMultipleChoiceChange}
									/>
									True
								</label>
								<label>
									<input
										type="radio"
										name={`question-${currentQuestionIndex}`}
										value="False"
										checked={answers[currentQuestionIndex] === "False"}
										onChange={handleMultipleChoiceChange}
									/>
									False
								</label>
							</div>
						)}
						{currentQuestionIndex < questions.length - 1 ? (
							<button
								className="indipendent-student-write-test-button"
								onClick={handleNext}
							>
								Next
							</button>
						) : (
							<button
								className="indipendent-student-write-test-button"
								onClick={handleSubmit}
							>
								Submit
							</button>
						)}
					</div>
				) : (
					<div>
						<h2>Exam Finished!</h2>
					</div>
				)}
			</div>
			{showModal && (
				<div className="indipendent-student-write-test-modal">
					<div className="indipendent-student-write-test-modal-content">
						<span
							className="indipendent-student-write-test-modal-close"
							onClick={closeModalAndNavigate}
						>
							&times;
						</span>
						<h2>Exam Results</h2>
						<p>
							<strong>User:</strong> {examResults.user}
						</p>
						<p>
							<strong>Time Taken:</strong> {examResults.timeTaken}
						</p>
						<p>
							<strong>Date Taken:</strong> {examResults.dateTaken}
						</p>
						<p>
							<strong>Total Questions:</strong> {examResults.totalQuestions}
						</p>
						<p>
							<strong>Marks:</strong> {examResults.marks}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default IndStudentWriteTest;
