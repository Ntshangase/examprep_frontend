import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TestGeneratePage.css";
import { getCourseById, lectureGenerateTest } from "../../../Api/Api";
import { useSelector } from "react-redux";

const TestGeneratePage = () => {
	const [testName, setTestName] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [duration, setDuration] = useState("");
	const [instruction, setInstruction] = useState("");
	const [totalGrade, setTotalGrade] = useState("");
	const [selectedTopics, setSelectedTopics] = useState({});
	const [totalWeight, setTotalWeight] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [courseData, setCourseData] = useState([]);
	const [loadingState, setLoadingState] = useState(true);
	const navigate = useNavigate();
	const { courseId } = useParams();
	const user = useSelector((state) => state.user.userData);

	const handleTopicChange = (domainId, topicId, value) => {
		const questionCount = parseInt(value, 10) || 0;
		setSelectedTopics((prevSelectedTopics) => {
			const updatedTopics = {
				...prevSelectedTopics,
				[domainId]: {
					...prevSelectedTopics[domainId],
					[topicId]: questionCount,
				},
			};

			const newTotal = Object.values(updatedTopics).reduce(
				(domainAcc, topics) =>
					domainAcc + Object.values(topics).reduce((topicAcc, count) => topicAcc + count, 0),
				0
			);
			setTotalWeight(newTotal);
			return updatedTopics;
		});
	};

	useEffect(() => {
		const fetchCourse = async () => {
			try {
				const response = await getCourseById(courseId);
				setCourseData(response.data.domains);
			} catch (error) {
				console.log(error);
			} finally {
				setLoadingState(false);
			}
		};
		fetchCourse();
	}, [courseId]);

	const handleGenerateTest = async () => {
		const payload = {
			testName,
			instruction,
			totalGrade,
			dueDate,
			duration,
			topicQuestionCount: {},
		};
		for (let domainId in selectedTopics) {
			for (let topicId in selectedTopics[domainId]) {
				const questionCount = selectedTopics[domainId][topicId];
				if (questionCount > 0) {
					payload.topicQuestionCount[topicId] = questionCount;
				}
			}
		}
		if (!testName) {
			alert("Enter test name");
			return;
		}
		if (totalWeight < 1) {
			alert("Please select number of questions");
			return;
		}

		setIsModalOpen(true);
		try {
			const response = await lectureGenerateTest(user.id, payload);
			const testId = response.data.testId;
			navigate(`/ViewClass`);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Number(totalGrade) < Number(totalWeight)) {
			setErrorMessage("Total grade must be greater than or equal to the total weight.");
			return;
		}
		if (Number(totalWeight) <= 3) {
			setErrorMessage("Total weight for the test must be greater than 3.");
			return;
		}
		setErrorMessage("");
		handleGenerateTest();
	};

	if (loadingState) {
		return <div>Loading...........</div>;
	}

	return (
		<div className="dashboard">
			<div className="dashboard-content">
				<form onSubmit={handleSubmit} className="test-generate-page-form">
					<div className="test-generate-page-half1">
						<h2>Create Test</h2>
						<div className="test-generate-page-form-group">
							<label>Test Name</label>
							<input
								type="text"
								value={testName}
								onChange={(e) => setTestName(e.target.value)}
								placeholder="Enter test name"
								required
							/>
						</div>
						<div className="test-generate-page-form-group">
							<label>Due Date</label>
							<input
								type="date"
								value={dueDate}
								onChange={(e) => setDueDate(e.target.value)}
								required
							/>
						</div>
						<div className="test-generate-page-form-group">
							<label>Test Duration (in minutes)</label>
							<input
								type="number"
								value={duration}
								onChange={(e) => setDuration(e.target.value)}
								placeholder="Enter duration in minutes"
								required
							/>
						</div>
						<div className="test-generate-page-form-group">
							<label>Instructions</label>
							<textarea
								value={instruction}
								onChange={(e) => setInstruction(e.target.value)}
								placeholder="Enter instructions for the test"
								required
							/>
						</div>
						<div className="test-generate-page-form-group">
							<label>Total Grade (Marks)</label>
							<input
								type="number"
								value={totalGrade}
								onChange={(e) => setTotalGrade(e.target.value)}
								placeholder="Enter total grade"
								required
							/>
						</div>
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					</div>

					<div className="main-content">
						<h2>Select Domains to Generate Test</h2>
						<div className="test-container">
							{courseData.map((domain) => (
								<div key={domain.domainId} className="domain-section">
									<h3>{domain.domainName}</h3>
									{domain.topics.map((topic) => (
										<div key={topic.topicId} className="topic-row">
											<label>{topic.topicName}</label>
											<input
												type="number"
												min="0"
												placeholder="Enter questions"
												value={selectedTopics[domain.domainId]?.[topic.topicId] || ""}
												onChange={(e) =>
													handleTopicChange(domain.domainId, topic.topicId, e.target.value)
												}
											/>
										</div>
									))}
								</div>
							))}
							<div className="total-weight">
								<span>Total Weight for the Test:</span>
								<input
									className="total-weight-input"
									type="text"
									value={totalWeight}
									readOnly
								/>
							</div>
						</div>
						<button className="generate-button" type="submit">
							Create Test
						</button>
					</div>
				</form>

				{isModalOpen && (
					<div className="modal-overlay">
						<div className="modal-box">
							<p>Test created successfully!</p>
							<button className="modal-button" onClick={() => navigate(`/ViewClass`)}>
								Okay
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TestGeneratePage;
