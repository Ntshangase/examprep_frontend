import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./AddQuestions.css";
import { useNavigate, useParams } from "react-router-dom";
import { getData, addQuestion } from "../../Api/Api.js";

export default function AddQuestions() {
	const links = [{ path: "/DataCaptureDashboard", pathName: "Home" }];

	const navigate = useNavigate();
	const [selectedDomain, setSelectedDomain] = useState("");
	const [selectedTopic, setSelectedTopic] = useState("");
	const [question, setQuestion] = useState("");
	const [correctAnswers, setCorrectAnswers] = useState([""]);
	const [incorrectAnswers, setIncorrectAnswers] = useState([""]);
	const [correctAnswerDescription, setCorrectAnswerDescription] = useState("");
	const [courseData, setCourseData] = useState();
	const [loadingState, setLoadingState] = useState(true);
	const { courseId } = useParams();
	const [questionType, setQuestionType] = useState("");
	const [trueCheckboxAnswer, setTrueCheckboxAnswer] = useState(false);
	const [falseCheckboxAnswer, setFalseCheckboxAnswer] = useState(false);
	const [
		trueFalseCorrectAnswerDescription,
		setTrueFalseCorrectAnswerDescription,
	] = useState("");
	const [trueFalseQuestion, setTrueFalseQuestion] = useState("");
	const [instruction, setInstruction] = useState("");
	const [file, setFile] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getData(`/api/courses/${courseId}`);
				setCourseData(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingState(false);
			}
		};
		fetchData();
	}, [courseId]);

	const domainsArray = [];
	if (courseData && courseData.domains) {
		courseData.domains.forEach((domain) => {
			domainsArray.push({
				domainName: domain.domainName,
				domainId: domain.domainId,
			});
		});
	}

	// For topics, include both topicName and topicId
	const topics = {};
	if (courseData && courseData.domains) {
		courseData.domains.forEach((domain) => {
			topics[domain.domainId] = domain.topics.map((topic) => ({
				topicName: topic.topicName,
				topicId: topic.topicId,
			}));
		});
	}

	//console.log(topics);

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

	const addCorrectAnswer = () => {
		setCorrectAnswers([...correctAnswers, ""]);
	};

	const addIncorrectAnswer = () => {
		setIncorrectAnswers([...incorrectAnswers, ""]);
	};

	const validateOneCheckboxIsChecked = () => {		//for true/false question
		if (!trueCheckboxAnswer && !falseCheckboxAnswer) {
			alert("Please select either True or False.");
			return; // Stop form submission
		}
	};

	const handleFileChange = (e) => {		//for file input question
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleSubmitMultipleChoice = async (e) => {
		e.preventDefault();

		const payloadMultipleChoice = {
			questionText: question,
			topicId: selectedTopic,
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

		const questionData = {
			questionDTO: JSON.stringify(payloadMultipleChoice),
			pdfFile: null,
		};

		try {
			await addQuestion(questionData);
			alert("Question added successfully!");
		} catch (error) {
			console.log(error);
		}

		// Reset the form after successful submission
		setSelectedDomain("");
		setSelectedTopic("");
		setQuestion("");
		setCorrectAnswers([""]);
		setIncorrectAnswers([""]);
		setCorrectAnswerDescription("");
	};

	//trueORfalse question
	const handleSubmitTrueFalse = async (e) => {
		e.preventDefault();

		const payloadTrueFalse = {
			questionText: trueFalseQuestion,
			topicId: selectedTopic,
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

		const questionData = {
			questionDTO: JSON.stringify(payloadTrueFalse),
			pdfFile: null,
		};

		try {
			await addQuestion(questionData);
			alert("Question added successfully!");
		} catch (error) {
			console.log(error);
		}

		// Reset the form after successful submission
		setSelectedDomain("");
		setSelectedTopic("");
		setTrueFalseQuestion("");
		setFalseCheckboxAnswer(false);
		setTrueCheckboxAnswer(false);
		setTrueFalseCorrectAnswerDescription("");
	};


	//FILE INPUT QUESTION
	const handleSubmitFileInputQuestion = async (e) => {
		e.preventDefault();

		if(!file) {
			alert("Please upload file: ");
			return;
		}

		const payloadFileInput = {
			questionText: question,
			topicId: selectedTopic,
			questionType: questionType,
			instruction: instruction,
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

		const questionData = {
			questionDTO: JSON.stringify(payloadFileInput),
			pdfFile: file,
		};

		try {
			await addQuestion(questionData);
			alert("Question added successfully!");
		} catch (error) {
			console.log(error);
		}

		// Reset the form after successful submission
		setSelectedDomain("");
		setSelectedTopic("");
		setQuestion("");
		setCorrectAnswers([""]);
		setIncorrectAnswers([""]);
		setCorrectAnswerDescription("");
		setFile(null);
		setInstruction("");
	};


	if (loadingState) {
		return <div>...Loading</div>;
	}

	return (
		<div className="add-questions-container">
			<Sidebar links={links} />
			<div className="add-questions-content">
				<h2 className="add-questions-content-h2">Add Question</h2>
				<div className="add-questions-info-flow">
					<img
						src={`data:image/jpeg;base64,${courseData.image}`}
						alt={courseData.courseName}
						className="add-questions-course-image"
					/>
					<div className="add-questions-course-title">
						<h3>{courseData.courseName}</h3>
					</div>
					<button
						className="add-question-upload-dump-button"
						onClick={() => {
							navigate("/UploadDumps");
						}}
					>
						Upload Dump
					</button>
				</div>
				<div>
					<label>Select Question Type</label>
					<select
						value={questionType}
						onChange={(e) => setQuestionType(e.target.value)}
					>
						<option value="" disabled>
							Select Question Type
						</option>
						<option value="MULTIPLE_CHOICE">Multiple Choice Question</option>
						<option value="TRUE_FALSE">True or False</option>
						<option value="SCENARIO_WITH_PDF">Pdf Question</option>
					</select>
				</div>

				{/**Multiple choice question */}
				{questionType === "MULTIPLE_CHOICE" && (
					<div className="add-questions-form-scrollable">
						<form onSubmit={handleSubmitMultipleChoice}>
							{/* Domain Selection */}
							<div className="add-questions-form-group">
								<label>Select Domain</label>
								<select
									value={selectedDomain}
									onChange={(e) => {
										setSelectedDomain(Number(e.target.value));
										setSelectedTopic(""); // Reset topic when domain changes
									}}
								>
									<option value="" disabled>
										Select a domain
									</option>
									{domainsArray.map((domain, index) => (
										<option key={index} value={domain.domainId}>
											{domain.domainName}
										</option>
									))}
								</select>
							</div>

							{/* Topic Selection */}
							{selectedDomain && (
								<div className="add-questions-form-group">
									<label>Select Topic</label>
									<select
										value={selectedTopic}
										onChange={(e) => setSelectedTopic(Number(e.target.value))}
									>
										<option value="" disabled>
											Select a topic
										</option>
										{topics[selectedDomain].map((topic, index) => (
											<option key={index} value={topic.topicId}>
												{topic.topicName}
											</option>
										))}
									</select>
								</div>
							)}

							{/* Question Input */}
							<div className="add-questions-form-group">
								<label>Question</label>
								<textarea
									value={question}
									onChange={(e) => setQuestion(e.target.value)}
									placeholder="Enter the question"
								/>
							</div>

							{/* Dynamic Correct Answer Inputs */}
							<div className="add-questions-form-group">
								<label>Correct Answers</label>
								{correctAnswers.map((answer, index) => (
									<div key={index}>
										<input
											type="text"
											value={answer}
											onChange={(e) =>
												handleCorrectAnswerChange(index, e.target.value)
											}
											placeholder={`Correct Answer ${index + 1}`}
										/>
										{index === correctAnswers.length - 1 && (
											<button type="button" onClick={addCorrectAnswer}>
												Add Correct Answer
											</button>
										)}
									</div>
								))}
							</div>

							{/* Dynamic Incorrect Answer Inputs */}
							<div className="add-questions-form-group">
								<label>Incorrect Answers</label>
								{incorrectAnswers.map((answer, index) => (
									<div key={index}>
										<input
											type="text"
											value={answer}
											onChange={(e) =>
												handleIncorrectAnswerChange(index, e.target.value)
											}
											placeholder={`Incorrect Answer ${index + 1}`}
										/>
										{index === incorrectAnswers.length - 1 && (
											<button type="button" onClick={addIncorrectAnswer}>
												Add Incorrect Answer
											</button>
										)}
									</div>
								))}
							</div>

							{/* Correct Answer Description */}
							<div className="add-questions-form-group">
								<label>Correct Answer Description</label>
								<textarea
									value={correctAnswerDescription}
									onChange={(e) => setCorrectAnswerDescription(e.target.value)}
									placeholder="Enter description for the correct answer"
								/>
							</div>

							{/* Submit Button */}
							<button className="add-question-button" type="submit">
								Add Question
							</button>
						</form>
					</div>
				)}

				{/**True or false question */}
				{questionType === "TRUE_FALSE" && (
					<div className="add-questions-form-scrollable">
						<form onSubmit={handleSubmitTrueFalse}>
							{/* Domain Selection */}
							<div className="add-questions-form-group">
								<label>Select Domain</label>
								<select
									value={selectedDomain}
									onChange={(e) => {
										setSelectedDomain(Number(e.target.value));
										setSelectedTopic(""); // Reset topic when domain changes
									}}
								>
									<option value="" disabled>
										Select a domain
									</option>
									{domainsArray.map((domain, index) => (
										<option key={index} value={domain.domainId}>
											{domain.domainName}
										</option>
									))}
								</select>
							</div>

							{/* Topic Selection */}
							{selectedDomain && (
								<div className="add-questions-form-group">
									<label>Select Topic</label>
									<select
										value={selectedTopic}
										onChange={(e) => setSelectedTopic(Number(e.target.value))}
									>
										<option value="" disabled>
											Select a topic
										</option>
										{topics[selectedDomain].map((topic, index) => (
											<option key={index} value={topic.topicId}>
												{topic.topicName}
											</option>
										))}
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
							<button
								className="add-question-button"
								onClick={validateOneCheckboxIsChecked}
								type="submit"
							>
								Add Question
							</button>
						</form>
					</div>
				)}

				{/**pdf file question */}
				{questionType === "SCENARIO_WITH_PDF" && (
					<div className="add-questions-form-scrollable">
						<form onSubmit={handleSubmitFileInputQuestion}>
							{/* Domain Selection */}
							<div className="add-questions-form-group">
								<label>Select Domain</label>
								<select
									value={selectedDomain}
									onChange={(e) => {
										setSelectedDomain(Number(e.target.value));
										setSelectedTopic(""); // Reset topic when domain changes
									}}
								>
									<option value="" disabled>
										Select a domain
									</option>
									{domainsArray.map((domain, index) => (
										<option key={index} value={domain.domainId}>
											{domain.domainName}
										</option>
									))}
								</select>
							</div>

							{/* Topic Selection */}
							{selectedDomain && (
								<div className="add-questions-form-group">
									<label>Select Topic</label>
									<select
										value={selectedTopic}
										onChange={(e) => setSelectedTopic(Number(e.target.value))}
									>
										<option value="" disabled>
											Select a topic
										</option>
										{topics[selectedDomain].map((topic, index) => (
											<option key={index} value={topic.topicId}>
												{topic.topicName}
											</option>
										))}
									</select>
								</div>
							)}

							{/**File Input */}
							<input
								type="file"
								onChange={handleFileChange}
								accept=".pdf,.doc,.docx"
							/>

							{/* Question Input */}
							<div className="add-questions-form-group">
								<label>Question</label>
								<textarea
									value={question}
									onChange={(e) => setQuestion(e.target.value)}
									placeholder="Enter the question"
								/>
							</div>

							{/* Instruction Input */}
							<div className="add-questions-form-group">
								<label>Instruction</label>
								<textarea
									value={instruction}
									onChange={(e) => setInstruction(e.target.value)}
									placeholder="Enter the Instruction for the question"
								/>
							</div>

							{/* Dynamic Correct Answer Inputs */}
							<div className="add-questions-form-group">
								<label>Correct Answers</label>
								{correctAnswers.map((answer, index) => (
									<div key={index}>
										<input
											type="text"
											value={answer}
											onChange={(e) =>
												handleCorrectAnswerChange(index, e.target.value)
											}
											placeholder={`Correct Answer ${index + 1}`}
										/>
										{index === correctAnswers.length - 1 && (
											<button type="button" onClick={addCorrectAnswer}>
												Add Correct Answer
											</button>
										)}
									</div>
								))}
							</div>

							{/* Dynamic Incorrect Answer Inputs */}
							<div className="add-questions-form-group">
								<label>Incorrect Answers</label>
								{incorrectAnswers.map((answer, index) => (
									<div key={index}>
										<input
											type="text"
											value={answer}
											onChange={(e) =>
												handleIncorrectAnswerChange(index, e.target.value)
											}
											placeholder={`Incorrect Answer ${index + 1}`}
										/>
										{index === incorrectAnswers.length - 1 && (
											<button type="button" onClick={addIncorrectAnswer}>
												Add Incorrect Answer
											</button>
										)}
									</div>
								))}
							</div>

							{/* Correct Answer Description */}
							<div className="add-questions-form-group">
								<label>Correct Answer Description</label>
								<textarea
									value={correctAnswerDescription}
									onChange={(e) => setCorrectAnswerDescription(e.target.value)}
									placeholder="Enter description for the correct answer"
								/>
							</div>

							{/* Submit Button */}
							<button className="add-question-button" type="submit">
								Add Question
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
}
