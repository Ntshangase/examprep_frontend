// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Sidebar from "../../../Components/Sidebar/Sidebar";
// import "./IndStudentWriteTest.css";
// import { getGeneratedTest, postTestResult } from "../../../Api/Api";
// import { useSelector } from "react-redux";

// const IndStudentWriteTest = () => {
// 	const links = [
// 		{ path: "/IndStudentCourses", pathName: "Home" },
// 		// { path: "/IndStudentdash", pathName: "Course Details" },
// 	];

// 	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// 	const [answers, setAnswers] = useState([]);
// 	const [showModal, setShowModal] = useState(true); // Set to true initially to show the first question
// 	const { testId } = useParams();
// 	const user = useSelector((state) => state.user.userData);
// 	const [questions, setQuestions] = useState([]);

// 	useEffect(() => {
// 		if (!user?.id) return;
// 		const fetchTest = async () => {
// 			try {
// 				const response = await getGeneratedTest(testId, user.id);
// 				setQuestions(response.data.questions);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};
// 		fetchTest();
// 	}, [testId, user]);

// 	const handleAnswerChange = (questionId, selectedAnswerId) => {
// 		// Update the answers array to store questionId and selected answerId
// 		const newAnswers = answers.filter((a) => a.questionId !== questionId); // Remove any existing answer for this question
// 		newAnswers.push({ questionId, selectedAnswerId }); // Add the new answer

// 		setAnswers(newAnswers);
// 	};

// 	const handleNext = () => {
// 		if (currentQuestionIndex < questions.length - 1) {
// 			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
// 		} else {
// 			console.log("Test finished. User answers:", answers);
// 			setShowModal(false); // Close modal when finished
// 			handleSubmit();
// 		}
// 	};

// 	const handlePrevious = () => {
// 		if (currentQuestionIndex > 0) {
// 			setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
// 		}
// 	};

// 	const handleSubmit = async () => {
// 		console.log("Submitted answers:", answers);
// 		// Additional submission logic

// 		try{
// 			await postTestResult(testId, answers);
// 		}catch(error){
// 			console.log(error);
// 		}
// 	};
//   console.log(questions);
//   console.log(answers);

// 	return (
// 		<div className="indipendent-student-write-test-container">
// 			<Sidebar links={links} />
// 			<div className="indipendent-student-write-test-content">
// 				<h2 className="indipendent-student-write-test-h2">Write Your Test</h2>

// 				{showModal && questions.length > 0 && (
// 					<div className="modal">
// 						<div className="modal-content">
// 							<h2>{questions[currentQuestionIndex].questionText}</h2>
// 							{questions[currentQuestionIndex].answers.map((answer, index) => (
// 								<div key={index}>
// 									<input
// 										type="radio"
// 										name={`question-${questions[currentQuestionIndex].questionId}`}
// 										value={answer.answerId}
// 										checked={
// 											answers.some(
// 												(a) =>
// 													a.questionId === questions[currentQuestionIndex].questionId &&
// 													a.selectedAnswerId === answer.answerId
// 											)
// 										}
// 										onChange={() =>
// 											handleAnswerChange(questions[currentQuestionIndex].questionId, answer.answerId)
// 										}
// 									/>
// 									<span>{answer.answerText}</span>
// 								</div>
// 							))}
// 							<div className="modal-navigation">
// 								<button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
// 									Previous
// 								</button>
// 								<button onClick={handleNext}>
// 									{currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default IndStudentWriteTest;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./IndStudentWriteTest.css";
import { getGeneratedTest, postTestResult } from "../../../Api/Api";
import { useSelector } from "react-redux";

const IndStudentWriteTest = () => {
	const links = [
		{ path: "/IndStudentCourses", pathName: "Home" },
	];

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [showModal, setShowModal] = useState(true);
	const { testId } = useParams();
	const user = useSelector((state) => state.user.userData);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		if (!user?.id) return;
		const fetchTest = async () => {
			try {
				const response = await getGeneratedTest(testId, user.id);
				setQuestions(response.data.questions);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTest();
	}, [testId, user]);

	const handleAnswerChange = (questionId, selectedAnswerId) => {
		// Update the answers array to store questionId and selected answerId
		const newAnswers = answers.filter((a) => a.questionId !== questionId);
		newAnswers.push({ questionId, selectedAnswerId });

		setAnswers(newAnswers);
	};

	const handleNext = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
		} else {
			console.log("Test finished. User answers:", answers);
			setShowModal(false);
			handleSubmit();
		}
	};

	const handlePrevious = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
		}
	};

	const handleSubmit = async () => {
		console.log("Submitted answers:", answers);

		try {
			await postTestResult(testId, answers);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="indipendent-student-write-test-container">
			<Sidebar links={links} />
			<div className="indipendent-student-write-test-content">
				<h2 className="indipendent-student-write-test-h2">Write Your Test</h2>

				{showModal && questions.length > 0 && (
					<div className="modal">
						<div className="modal-content">
							<h2>{questions[currentQuestionIndex].questionText}</h2>
							{questions[currentQuestionIndex].answers.map((answer) => (
								<div key={answer.answerId}>
									<input
										type="radio"
										name={`question-${questions[currentQuestionIndex].questionId}`}
										value={answer.answerId}
										checked={
											answers.some(
												(a) =>
													a.questionId === questions[currentQuestionIndex].questionId &&
													a.selectedAnswerId === answer.answerId
											)
										}
										onChange={() =>
											handleAnswerChange(questions[currentQuestionIndex].questionId, answer.answerId)
										}
									/>
									<span>{answer.answerText}</span>
								</div>
							))}
							<div className="modal-navigation">
								<button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
									Previous
								</button>
								<button onClick={handleNext}>
									{currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default IndStudentWriteTest;
