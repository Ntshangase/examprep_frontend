import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EnrolledStudentCreateTest.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { getCourseById, postEnrolledStudentGeneratetest } from "../../../Api/Api";
import { useSelector } from "react-redux";

const EnrolledStudentCreateTest = () => {
  const links = [
    { path: "/EnrolledStudentCourses", pathName: "Home" },
    // { path: "/EnrolledStudentdash", pathName: "Course Details" },
  ];

  const [selectedTopics, setSelectedTopics] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const [testName, setTestName] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [generatedTestId, setGeneratedTestId] = useState(null);
  const { courseId } = useParams();

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
    if (!testName) {
      alert("Enter test name");
      return;
    }

    if (totalWeight < 1) {
      alert("Please select number of questions");
      return;
    }

    // Check if there are any valid topic question counts
    const validTopicQuestionCount = Object.values(selectedTopics).some(domain =>
      Object.values(domain).some(topicCount => topicCount > 0)
    );

    if (!validTopicQuestionCount) {
      alert("Please select at least one question.");
      return;
    }

    const payload = {
      testName: testName,
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

    if (Object.keys(payload.topicQuestionCount).length === 0) {
      alert("Please select at least one question per topic.");
      return;
    }
    console.log("Generated Test Request:", payload);

    setIsModalOpen(true);

    try {
      const response = await postEnrolledStudentGeneratetest(user.id, payload);
      console.log("Generated Test: ", response.data);
      setGeneratedTestId(response.data.testId);
      setIsModalOpen(true);
    } catch (error) {
      console.log("Error generating test:", error);
    }
  };

  const handleStartTest = () => {
    if (generatedTestId) {
      navigate(`/EnrolledStudentWriteTest/${generatedTestId}`);
    }
  };

  if (loadingState) {
    return <div>Loading...........</div>;
  }
  return (
    <div className="enrolled-student-create-test-container">
      <Sidebar links={links} />
      <div className="enrolled-student-content-area">
        <div className="create-test-container">
          <h1>Select Domains to Generate Test</h1>
          <div>
            <label>Enter Test Name</label>
            <input
              type="text"
              placeholder="Enter Test Name"
              value={testName}
              onChange={(e) => {
                setTestName(e.target.value);
              }}
              required
            />
          </div>
          {courseData.map((domain, index) => (
            <div
              key={index}
              className="enrolled-student-create-test-domain-section"
            >
              <h2 className="enrolled-student-create-test-domain-section-h2">
                {domain.domainName}
              </h2>

              {domain.topics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <label>{topic.topicName}</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Enter questions"
                    value={
                      selectedTopics[domain.domainId]?.[topic.topicId] || ""
                    }
                    onChange={(e) =>
                      handleTopicChange(
                        domain.domainId,
                        topic.topicId,
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
            </div>
          ))}

          <div className="total-weight-section">
            <p className="enrolled-student-total-weight-text">Total:</p>
            <input
              className="enrolled-student-total-weight"
              type="text"
              value={totalWeight}
              readOnly
            />
          </div>
        </div>
        <button className="generate-test-button" onClick={handleGenerateTest}>
          Generate Test
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Click Okay to start the test</p>
              <button className="modal-button" onClick={handleStartTest}>
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrolledStudentCreateTest;
