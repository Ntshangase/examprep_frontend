import React, {useState} from 'react';
import "./ModerateQuestion.css";
import ModeratorSidebar from '../../Components/Sidebar/ModeratorSidebar';
import { useNavigate } from 'react-router-dom';

export default function ModerateQuestion() {

    const [selectedDomain, setSelectedDomain] = useState("Aws");
	const [selectedTopic, setSelectedTopic] = useState("Database");
	const [question, setQuestion] = useState("Which of the following ports is typically used by HTTPS?");
	const [correctAnswers, setCorrectAnswers] = useState(["80"]);
	const [incorrectAnswers, setIncorrectAnswers] = useState(["90","80","200"]);
	const [correctAnswerDescription, setCorrectAnswerDescription] = useState("Port 80 is the fastest and safest port for database connection");

	const domains = ["Copmtia", "Aws", "History"];
	const topics = {
		Math: ["Algebra", "Geometry", "Calculus"],
		Aws: ["Physics", "Database", "Biology"],
		History: ["World History", "Ancient Civilizations", "Modern History"],
	};

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



    const navigate = useNavigate();
    const QuestionView = () => {
		navigate("/QuestionView");
	};
	const handleSubmit = (e) => {
		e.preventDefault();



	};


  return (
    <div>
        <div className='moderate-question-container'>
            <ModeratorSidebar />
            <div className='moderate-question-content'>
                <h2>Moderate Question</h2>
                <h4>Aws Cloud Practisioner</h4>
                <form onSubmit={handleSubmit}>
						{/* Domain Selection */}
						<div className="moderate-question-form-group">
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
							<div className="moderate-question-form-group">
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
										value={answer}
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
										value={answer}
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
						<button onClick={QuestionView} className="moderate-question-button" type="submit">Approve</button>
					</form>
            </div>
        </div>
    </div>
  )
}
