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
	const [topicId, setTopicId] = useState(null);
	const { questionId } = useParams();
	const [loadingState, setLoadingState] = useState(true);
	const [trueCheckboxAnswer, setTrueCheckboxAnswer] = useState(false); //nazo
	const [falseCheckboxAnswer, setFalseCheckboxAnswer] = useState(false);
	const [
		trueFalseCorrectAnswerDescription,
		setTrueFalseCorrectAnswerDescription,
	] = useState("");
	const [trueFalseQuestion, setTrueFalseQuestion] = useState("");
	//const [instruction, setInstruction] = useState("");

	const [myData, setMyData] = useState([]);
	useEffect(() => {
		const fetchQuestionDetailsById = async () => {
			try {
				const response = await getUnmoderatedQuestion(questionId);
				setMyData(response.data);
				setQuestion(response.data.questionText);
				setSelectedDomain(response.data.domainName);
				setSelectedTopic(response.data.topicName);
				setFile(response.data.pdfFile);
				setQuestionType(response.data.questionType);
				setTopicId(response.data.topicId);
				setTrueFalseQuestion(response.data.questionText);

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
				setTrueFalseCorrectAnswerDescription(correct[0].answerDescription)

				if(correct[0].answerText === "True") { 	//setOneCheckboxToChecked
					setTrueCheckboxAnswer(true)
				}else{
					setFalseCheckboxAnswer(true);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingState(false);
			}
		};
		fetchQuestionDetailsById();
	}, [questionId]);

	console.log(myData);

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

	const handleSubmitMultipleChoice = async (e) => {
		e.preventDefault();

		const payloadMultipleChoice = {
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
		};

		const updatingQuestion = {
			questionDTO: JSON.stringify(payloadMultipleChoice),
			pdfFile: file,
		};

		try {
			await updateQuestion(questionId, updatingQuestion);
			alert("question updated...");
			navigate("/QuestionView/3"); //i need courseId
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmitTrueFalse = async (e) => {
		e.preventDefault();

		if (!trueCheckboxAnswer && !falseCheckboxAnswer) {
			alert("Please select either True or False.");
			return; // Stop form submission
		}

		const payloadTrueFalse = {
			questionId: questionId,
			moderated: true,
			questionText: trueFalseQuestion,
			topicId: topicId,
			questionType: questionType,
			answers: [
				{
					answerText: document.getElementById("true-answer-text").textContent,
					answerDescription: trueFalseCorrectAnswerDescription,
					isCorrect: trueCheckboxAnswer,
				},
				{
					answerText: document.getElementById("false-answer-text").textContent,
					isCorrect: falseCheckboxAnswer,
				},
			],
		};

		const questionDataTrueFalse = {
			questionDTO: JSON.stringify(payloadTrueFalse),
			pdfFile: null,
		};

		try {
			await updateQuestion(questionId, questionDataTrueFalse);
			alert("question updated...");
		} catch (error) {
			console.log(error);
		}
	};

	if (loadingState) {
		return <div>...Loading Question Data</div>;
	}

	const renderQuestionView = () => {
		switch (questionType) {
			case "MULTIPLE_CHOICE":
				return (
					<form onSubmit={handleSubmitMultipleChoice}>
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
						<button className="moderate-question-button" type="submit">
							Approve
						</button>
					</form>
				);
			case "TRUE_FALSE":
				return (
					<div className="add-questions-form-scrollable">
						<form onSubmit={handleSubmitTrueFalse}>
							{/* Domain Selection */}
							<div className="add-questions-form-group">
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
							<div className="add-questions-form-group">
								<label>Question</label>
								<textarea
									value={trueFalseQuestion}
									onChange={(e) => setTrueFalseQuestion(e.target.value)}
									placeholder="Enter the question"
								/>
							</div>

							{/* Dynamic Correct Answer Input */}
							<div className="add-questions-form-group">
								<label>Is this the Correct Answer?</label>
								<div>
									<input
										type="checkbox"
										checked={trueCheckboxAnswer}
										onChange={(e) => {
											setTrueCheckboxAnswer(e.target.checked);
											setFalseCheckboxAnswer(false);
										}}
									/>
									<span id="true-answer-text">True</span>
								</div>
								<div>
									<input
										type="checkbox"
										checked={falseCheckboxAnswer}
										onChange={(e) => {
											setFalseCheckboxAnswer(e.target.checked);
											setTrueCheckboxAnswer(false);
										}}
									/>
									<span id="false-answer-text">False</span>
								</div>
							</div>

							{/* Correct Answer Description */}
							<div className="add-questions-form-group">
								<label>Correct Answer Description</label>
								<textarea
									value={trueFalseCorrectAnswerDescription}
									onChange={(e) =>
										setTrueFalseCorrectAnswerDescription(e.target.value)
									}
									placeholder="Enter description for the correct answer"
								/>
							</div>

							{/* Submit Button */}
							<button className="add-question-button" type="submit">
								Add Question
							</button>
						</form>
					</div>
				);
			default:
				break;
		}
	};

	return (
		<div>
			<div className="moderate-question-container">
				<Sidebar links={links} />
				<div className="moderate-question-content">
					<h2>Moderate Question</h2>
					{renderQuestionView()}
				</div>
			</div>
		</div>
	);
}
