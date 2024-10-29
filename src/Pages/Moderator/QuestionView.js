import React, { useEffect, useState } from "react";
import "./QuestionView.css"; // Import the CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom"; // Import hooks for routing
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getUnmoderatedCourseQuestions } from "../../Api/Api";

const QuestionView = () => {
	const links = [
		{ path: "/ModeratorDashboard", pathName: "Home" },
		{ path: "/QuestionView", pathName: "Questions" },
    {path: "/FlaggedQuestionView", pathName: "Flagged "}
	];

	const navigate = useNavigate(); // Initialize navigate
	const { courseId } = useParams();
	const [courseQuestions, setCourseQuestions] = useState([]);


	const handleModerateQuestion = (questionId) => {
		navigate(`/ModerateQuestion/${questionId}`);
	};

	useEffect(() => {
		const fetchUnmoderatedCourseQuestions = async () => {

			try {
				const response = await getUnmoderatedCourseQuestions(courseId);
				setCourseQuestions(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUnmoderatedCourseQuestions();
	},[courseId]);

	console.log(courseQuestions);

	return (
		<div className="question-view-container">
			<Sidebar links={links} />
			<div className="question-view-content">
				<h2 className="question-view-content-h2">Aws Cloud Practisioner</h2>
				<div className="question-view-search-container">
					<label htmlFor="search-input" className="search-label">
						Search by Question ID:
					</label>
					<input
						id="search-input"
						type="text"
						className="search-input"
						placeholder="Enter Course ID"
					/>
				</div>
				<div className="questions-section">
					{courseQuestions.map((question, index) => (
						<div key={index} className="question-card">
							<div className="question-header">
								<p>{question.questionText}</p>
								<button onClick={() => {handleModerateQuestion(question.questionId)}} className="edit-btn">
									<FontAwesomeIcon icon={faEdit} />
								</button>
							</div>
							<div className="options-list">
								{question.answers.map((answer, index) => (
									<div key={index} className="option">
										<label>{answer.answerText}</label>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="question-view-button-container">
					<button
						onClick={() => navigate("/ModeratorDashboard")}
						className="question-view-back-btn"
					>
						<FontAwesomeIcon icon={faArrowLeftLong} /> Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuestionView;
