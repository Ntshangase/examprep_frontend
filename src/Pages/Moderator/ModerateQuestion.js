import React, { useEffect, useState } from "react";
import "./ModerateQuestion.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { getUnmoderatedQuestion, updateQuestion } from "../../Api/Api";

export default function ModerateQuestion() {
	const links = [
		{ path: "/ModeratorDashboard", pathName: "Home" },
		{ path: "/QuestionView", pathName: "Questions" },
		{ path: "/FlaggedQuestionView", pathName: "Flagged" },
	];

	const [selectedDomain, setSelectedDomain] = useState("");
	const [selectedTopic, setSelectedTopic] = useState("");
	const [question, setQuestion] = useState("");
	const [correctAnswers, setCorrectAnswers] = useState([]);
	const [incorrectAnswers, setIncorrectAnswers] = useState([]);
	const [correctAnswerDescription, setCorrectAnswerDescription] = useState("");
	const [file, setFile] = useState(null);
	const navigate = useNavigate();
	const [questionType, setQuestionType] = useState();
	const [topicId, setTopicId ] = useState(null);

	const { questionId } = useParams();
	const [loadingState, setLoadingState] = useState(true);

	useEffect(() => {
		const fetchQuestionDetailsById = async () => {
			try {
				const response = await getUnmoderatedQuestion(questionId);
				setQuestion(response.data.questionText);
				setSelectedDomain(response.data.domainName);
				setSelectedTopic(response.data.topicName);
				setFile(response.data.pdfFile)
				setQuestionType(response.data.questionType)
				setTopicId(response.data.topicId)

				// Extract correct and incorrect answers
				const correct = response.data.answers.filter(
					(answer) => answer.isCorrect
				);
				const incorrect = response.data.answers.filter(
					(answer) => !answer.isCorrect
				);

				setCorrectAnswers(correct);
				setIncorrectAnswers(incorrect);
				setCorrectAnswerDescription(correct[0].answerDescription); //Notice the use-case is for having one correct answer description.
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingState(false);
			}
		};
		fetchQuestionDetailsById();
	}, [questionId]);

	// Handle dynamic inputs for correct and incorrect answers
	const handleCorrectAnswerChange = (index, value) => {
		const updatedCorrectAnswers = [...correctAnswers];
		updatedCorrectAnswers[index] = value;
		setCorrectAnswers(updatedCorrectAnswers);
	};

	const handleIncorrectAnswerChange = (index, value) => {
		const updatedIncorrectAnswers = [...incorrectAnswers];
		updatedIncorrectAnswers[index] = value;
		setIncorrectAnswers(updatedIncorrectAnswers);
	};


	const handleSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			questionId: questionId,
			moderated: true,
			questionText: question,
			topicId: topicId,
			questionType: questionType,
			answers: [
				{
					answerText: correctAnswers[0],
					answerDescription: correctAnswerDescription,
					isCorrect: true,
				},
				...incorrectAnswers.map((answer) => ({
					answerText: answer,
					isCorrect: false,
				})),
			],
		}

		const updatingQuestion = {
			questionDTO: JSON.stringify(payload),
			pdfFile: file,
		}

		try {
			await updateQuestion(questionId, updatingQuestion);
			alert("question updated...");
			navigate("/QuestionView/3");	//i need courseId
		} catch (error) {
			console.log(error);
		}


	};

	if (loadingState) {
		return <div>...Loading Question Data</div>;
	}

	return (
		<div>
			<div className="moderate-question-container">
				<Sidebar links={links} />
				<div className="moderate-question-content">
					<h2>Moderate Question</h2>
					<form onSubmit={handleSubmit}>
						<div className="moderate-question-form-group">
							<label>Select Domain</label>
							<select
								value={selectedDomain}
								// onChange={(e) => {
								// 	setSelectedDomain(e.target.value);
								// 	setSelectedTopic(""); // Reset topic when domain changes
								// }}
							>
								<option value={selectedDomain} disabled>
									{selectedDomain}
								</option>
								{/* {domains.map((domain, index) => (
									<option key={index} value={domain}>
										{domain}
									</option>
								))} */}
							</select>
						</div>

						{/* Topic Selection */}
						{selectedDomain && (
							<div className="moderate-question-form-group">
								<label>Select Topic</label>
								<select
									value={selectedTopic}
									// onChange={(e) => setSelectedTopic(e.target.value)}
								>
									<option value={selectedTopic} disabled>
										{selectedTopic}
									</option>
									{/* {topics[selectedDomain].map((topic, index) => (
										<option key={index} value={topic}>
											{topic}
										</option>
									))} */}
								</select>
							</div>
						)}

						{/* Question Input */}
						<div className="moderate-question-form-group">
							<label>Question</label>
							<textarea
								value={question}
								onChange={(e) => setQuestion(e.target.value)}
								placeholder="Enter the question"
							/>
						</div>

						{/* Dynamic Correct Answer Inputs */}
						<div className="moderate-question-form-group">
							<label>Correct Answers</label>
							{correctAnswers.map((answer, index) => (
								<div key={index}>
									<input
										type="text"
										value={answer.answerText}
										onChange={(e) =>
											handleCorrectAnswerChange(index, e.target.value)
										}
										placeholder={`Correct Answer ${index + 1}`}
									/>
								</div>
							))}
						</div>

						{/* Dynamic Incorrect Answer Inputs */}
						<div className="moderate-question-form-group">
							<label>Incorrect Answers</label>
							{incorrectAnswers.map((answer, index) => (
								<div key={index}>
									<input
										type="text"
										value={answer.answerText}
										onChange={(e) =>
											handleIncorrectAnswerChange(index, e.target.value)
										}
										placeholder={`Incorrect Answer ${index + 1}`}
									/>
								</div>
							))}
						</div>

						{/* Correct Answer Description */}
						<div className="moderate-question-form-group">
							<label>Correct Answer Description</label>
							<textarea
								value={correctAnswerDescription}
								onChange={(e) => setCorrectAnswerDescription(e.target.value)}
								placeholder="Enter description for the correct answer"
							/>
						</div>

						{/* Submit Button */}
						<button
							className="moderate-question-button"
							type="submit"
						>
							Approve
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
