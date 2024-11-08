import React, { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import "./TestGeneratePage.css";
import { getCourseById,lectureGenerateTest } from "../../../Api/Api";
import { useSelector } from "react-redux";



const TestGeneratePage = () => {
	const [testName, setTestName] = useState("");
	const [loadingState, setLoadingState] = useState(true);
	const [dueDate, setDueDate] = useState("");
	const [instruction, setInstruction] = useState("");
	const [totalGrade, setTotalGrade] = useState("");
    const [duration, setDuration] = useState("");
	const [selectedTopics, setSelectedTopics] = useState({});
	const [totalWeight, setTotalWeight] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState(""); // For displaying validation errors
	const [generatedTestId, setGeneratedTestId] = useState(null);
	const navigate = useNavigate();
	const [courseData,setCourseData]=useState([]);
	const{courseId}= useParams();
	const user = useSelector((state) => state.user.userData);

	// const handleTopicChange = (domainTitle, topic, value) => {
	// 	const newSelectedTopics = {
	// 		...selectedTopics,
	// 		[domainTitle]: {
	// 			...selectedTopics[domainTitle],
	// 			[topic]: value,
	// 		},
	// 	};

	// 	setSelectedTopics(newSelectedTopics);

	// 	let total = 0;
	// 	Object.values(newSelectedTopics).forEach((domainTopics) => {
	// 		Object.values(domainTopics).forEach((count) => {
	// 			total += Number(count || 0);
	// 		});
	// 	});
	// 	setTotalWeight(total);
	// };

	// const handleGenerateTest = (e) => {
	// 	e.preventDefault(); // Prevent default form submission
	// 	setIsModalOpen(true);
	// };

		// Function to handle topic changes and update selectedTopics state
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
	
				// Calculate the total weight immediately
				const newTotal = Object.values(updatedTopics).reduce(
					(domainAcc, topics) => {
						return (
							domainAcc +
							Object.values(topics).reduce(
								(topicAcc, count) => topicAcc + count,
								0
							)
						);
					},
					0
				);
	
				setTotalWeight(newTotal);
	
				return updatedTopics;
			});
		};

	useEffect(()=>{
		const fetchCourse=async()=> {
		  try{
			const response=await getCourseById(courseId);
			setCourseData(response.data.domains);
			console.log(response.data);
		  }catch(error){
			console.log(error);
		  }finally{
			setLoadingState(false);
		  }
		};
		fetchCourse();
		},[courseId]);

		console.log(courseData);



	  
		const handleGenerateTest = async () => {
			const payload = {
				testName:testName,
				instruction:instruction,
				totalGrade:totalGrade,
				dueDate:dueDate,
				duration:duration,
				topicQuestionCount:{}
			};
			for (let domainId in selectedTopics) {
				for (let topicId in selectedTopics[domainId]) {
					const questionCount = selectedTopics[domainId][topicId];
					if (questionCount > 0) {
						payload.topicQuestionCount[topicId] = questionCount;
					}
				}
			}
			console.log("Generated Test Request:", payload);
			if (!testName) {
				alert("Enter test name");
				return;
			}
	
		if (totalWeight<1){
		  alert("Please select number of questions");
		  return
		}
		setIsModalOpen(true);
		try{
		  const response= await lectureGenerateTest(user.id,payload);
		  const testId = response.data.testId;
		  setGeneratedTestId(testId);
		  handleStartTest();
		}catch(error)
		
		{console.log(error);}
	
			// Populate topicQuestionCount with selected topics and question counts
		};

		const handleStartTest = () => {
			setIsModalOpen(false); 
			navigate(`/ViewClass`);
			//console.log(testId);
		  };

	// const handleStartTest = () => {
	// 	setIsModalOpen(false);
	// 	const testData = {
	// 		testName,
	// 		dueDate,
	// 		instructions,
	// 		totalGrade,
	// 		selectedTopics,
	// 		totalWeight,
    //         testDuration
	// 	};
	// 	console.log(testData); // Log all test data for submission
	// 	navigate("/ViewClass/1", { state: { selectedTopics } }); // Navigate to the next page
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		const grade = Number(totalGrade);
		const weight = Number(totalWeight);

		// Validation logic
		if (grade < weight) {
			setErrorMessage(
				"Total grade must be greater than or equal to the total weight."
			);
			return;
		}
		if (weight <= 3) {
			setErrorMessage("Total weight for the test must be greater than 3.");
			return;
		}

		setErrorMessage(""); // Clear any previous error messages
		handleGenerateTest(e); // Call the function to generate the test
	};

	if (loadingState) {
		return <div>Loading...........</div>;
	}

	return (
		<div className="dashboard">
			<div className="dashboard-content">
				<form onSubmit={handleSubmit} className="test-generate-page-form">
					{/* Test Configuration */}
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
							<label>Test Duration</label>
							<input
								type="time"
								value={duration}
								onChange={(e) => setDuration(e.target.value)}
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
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
						{/* Error message */}
					</div>

					{/* Test Questions */}
					<div className="main-content">
						<h2>Select Domains to Generate Test</h2>
						<div className="test-container">
							{courseData.map((domain,index) => (
								<div key={index} className="domain-section">
									<h3>{domain.domainName}</h3>
									{domain.topics.map((topic,index) => (
										<div key={index} className="topic-row">
											<label>{topic.topicName}</label>
											<input
												type="number"
												min="0"
												placeholder="Enter questions"
												value={selectedTopics[domain.title]?.[topic] || ""}
												onChange={(e) =>
													handleTopicChange(domain.title, topic, e.target.value)
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

				{/* Modal for test confirmation */}
				{isModalOpen && (
					<div className="modal-overlay">
						<div className="modal-box">
							<p>Click Okay to save test</p>
							<button className="modal-button">
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
