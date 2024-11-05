import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./IndStudentWriteTest.css";
import { getGeneratedTest } from "../../../Api/Api";
import { useSelector } from "react-redux";

const IndStudentWriteTest = () => {
  const links = [
    { path: "/StudentDashboards", pathName: "Home" },
    { path: "/IndStudentdash", pathName: "Course Details" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTopics } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [examResults, setExamResults] = useState({});
  const [reviewResults, setReviewResults] = useState([]); // New state for review results
  const { testId } = useParams();
  const user = useSelector((state) => state.user.userData);
  console.log("User data:", user);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    if (!user?.id) return;
    const fetchTest = async () => {
      try {
        const response = await getGeneratedTest(testId, user.id);

        setQuestion(response.data.questions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTest();
  }, [testId, user]);
  console.log(question || "No question data available yet");

  //   const handleNext = () => {
  //     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  //   };

  //   const handleMultipleChoiceChange = (event) => {
  //     setAnswers({
  //       ...answers,
  //       [currentQuestionIndex]: event.target.value,
  //     });
  //   };
  if (!user) {
    return <div>Loading...</div>; // Show a loading state if user data is not available
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="indipendent-student-write-test-container">
      <Sidebar links={links} />
      <div className="indipendent-student-write-test-content">
        <h2 className="indipendent-student-write-test-h2">Write Your Test</h2>
        <div>
          {question.map((questions, index) => (
            <div key={index}>
              <h2>{questions.questionText}</h2>
              {questions.answers.map((answer, index) => (
                <div key={index}>
                  <div>
                    <input
                     type="checkbox"
					 name={`question-${index}`} // Unique name per question to allow single selection
					 value={answer.answerText}  // or answer.id if you prefer an ID for the answer
					 checked={answers[currentQuestionIndex] === answer.answerText} // Set checked based on state
					 onChange={() => setAnswers({ ...answers, [currentQuestionIndex]: answer.answerText })} // Update answer state on change
                    />
                    <span id="false-answer-text">{answer.answerText}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndStudentWriteTest;
