import React from "react";
import "./FlaggedQuestionView.css"; // Import the CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import hooks for routing
import Sidebar from "../../Components/Sidebar/Sidebar";

const FlaggedQuestionView = () => {
	const links = [
		{ path: "/ModeratorDashboard", pathName: "Home" },
		{ path: "/FlaggedQuestionView", pathName: "Flagged" }
	];

	const ModerateQuestion = () => {
		navigate("/ModerateQuestion");
	};

	const navigate = useNavigate(); // Initialize navigate

	const flaggedQuestions = [
		{
			id: 1,
			question: "Which of the following ports is typically used by HTTPS?",
			options: ["80", "443", "21", "110"],
		},
		{
			id: 3,
			question:
				"Which of the following devices can provide power protection for computer hardware?",
			options: [
				"Surge suppressor",
				"Power strip",
				"Uninterruptible power supply",
				"AC adapter",
			],
		},
		{
			id: 5,
			question:
				"Which of the following is the correct IP range for a Class C address?",
			options: [
				"192.0.0.0 - 223.255.255.255",
				"128.0.0.0 - 191.255.255.255",
				"0.0.0.0 - 127.255.255.255",
				"224.0.0.0 - 239.255.255.255",
			],
		},
	];

	return (
		<div className="flagged-question-view-container">
			<Sidebar links={links} />
			<div className="flagged-question-view-content">
				<h2 className="flagged-question-view-content-h2">Flagged Questions</h2>
				<div className="flagged-question-view-search-container">
					<label htmlFor="search-input" className="flagged-question-view-search-label">
						Search by Question ID:
					</label>
					<input
						id="search-input"
						type="text"
						className="flagged-question-view-search-input"
						placeholder="Enter Question ID"
					/>
				</div>
				<div className="flagged-questions-section">
					{flaggedQuestions.map((question) => (
						<div key={question.id} className="flagged-question-view-question-card">
							<div className="flagged-question-view-question-header">
								<p>{question.question}</p>
								<button onClick={ModerateQuestion} className="flagged-question-view-edit-btn">
									<FontAwesomeIcon icon={faEdit} />
								</button>
							</div>
							<div className="flagged-question-view-options-list">
								{question.options.map((option, index) => (
									<div key={index} className="flagged-question-view-option">
										<label>{option}</label>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="flagged-question-view-button-container">
					<button
						onClick={() => navigate("/ModeratorDashboard")}
						className="flagged-question-view-back-btn"
					>
						<FontAwesomeIcon icon={faArrowLeftLong} /> Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default FlaggedQuestionView;