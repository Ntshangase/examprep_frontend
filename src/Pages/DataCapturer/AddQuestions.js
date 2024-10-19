import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./AddQuestions.css";
import courses from "../../Data/Courses.json";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../../Api/Api";

export default function AddQuestions() {

	const links = [
		{path: "/DataCaptureDashboard", pathName: "Home"}
	]

	const navigate = useNavigate();
	const [selectedDomain, setSelectedDomain] = useState("");
	const [selectedTopic, setSelectedTopic] = useState("");
	const [question, setQuestion] = useState("");
	const [correctAnswers, setCorrectAnswers] = useState([""]);
	const [incorrectAnswers, setIncorrectAnswers] = useState([""]);
	const [correctAnswerDescription, setCorrectAnswerDescription] = useState("");
	const [courseData, setCourseData] = useState();
	const [loadingState, setLoadingState] = useState(true);
	const {courseId} = useParams();

	const domains = ["Math", "Science", "History"];
	const topics = {
		Math: ["Algebra", "Geometry", "Calculus"],
		Science: ["Physics", "Chemistry", "Biology"],
		History: ["World History", "Ancient Civilizations", "Modern History"],
	};

	useEffect(() => {
		const fetchData = async () => {
			try{
				const response = await getData(`/api/courses/${courseId}`);
				setCourseData(response.data);
			}catch(error){
				console.log(error.message);
			}finally{
				setLoadingState(false);
			}
		}
		fetchData();
	}, [courseId]);

	console.log(courseData);

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

	const handleSubmit = (e) => {
		e.preventDefault();

		setSelectedDomain("");
		setSelectedTopic("");
		setQuestion("");
		setCorrectAnswers([""]); // Reset to initial state with one empty input
		setIncorrectAnswers([""]); // Reset to initial state with one empty input
		setCorrectAnswerDescription("");

		// const questionData = {
		// 	domain: selectedDomain,
		// 	topic: selectedTopic,
		// 	question,
		// 	correctAnswers,
		// 	incorrectAnswers,
		// 	correctAnswerDescription,
		// };
	};

	if(loadingState) {
		return <div>...Loading</div>
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
					<button className="add-question-upload-dump-button" onClick={() => {navigate("/UploadDumps")}}>Upload Dump</button>
				</div>
				<div className="add-questions-form-scrollable">
					<form onSubmit={handleSubmit}>
						{/* Domain Selection */}
						<div className="add-questions-form-group">
							<label>Select Domain</label>
							<select
								value={selectedDomain}
								onChange={(e) => {
									setSelectedDomain(e.target.value);
									setSelectedTopic(""); // Reset topic when domain changes
								}}
							>
								<option value="" disabled>
									Select a domain
								</option>
								{domains.map((domain, index) => (
									<option key={index} value={domain}>
										{domain}
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
									onChange={(e) => setSelectedTopic(e.target.value)}
								>
									<option value="" disabled>
										Select a topic
									</option>
									{topics[selectedDomain].map((topic, index) => (
										<option key={index} value={topic}>
											{topic}
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
						<button className="add-question-button" type="submit">Add Question</button>
					</form>
				</div>
			</div>
		</div>
	);
}
