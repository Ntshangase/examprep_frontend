import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import DatacaptureSidebar from "../../../src/Components/Sidebar/DatacaptureSidebar";
import './AddQuestions.css';

const AddQuestions = () => {
    const [course, setCourse] = useState("");
    const [version, setVersion] = useState("");
    const [domain, setDomain] = useState("");
    const [topic, setTopic] = useState("");
    const [question, setQuestion] = useState("");
    const [incorrectAnswers, setIncorrectAnswers] = useState(["", "", ""]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    const handleIncorrectAnswerChange = (index, value) => {
        const newAnswers = [...incorrectAnswers];
        newAnswers[index] = value;
        setIncorrectAnswers(newAnswers);
    };

    const navigate = useNavigate();

    return (
        <div className="upload-questions-dashboard">
            <div className="dashboard-content">

                <DatacaptureSidebar />
                <div className="content-area">
                    <div className="upload-header" ><h1>Upload Questions</h1> </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Course</label>
                            <select value={course} onChange={(e) => setCourse(e.target.value)}>
                                <option value="" disabled>Select Course</option>
                                <option value="Course 1">Course 1</option>
                                <option value="Course 2">Course 2</option>
                                {/* Add more course options as needed */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Version of Dump</label>
                            <input
                                type="text"
                                value={version}
                                onChange={(e) => setVersion(e.target.value)}
                                placeholder="Enter dump version"
                            />
                        </div>

                        <div className="form-group">
                            <label>Domain Name</label>
                            <select value={domain} onChange={(e) => setDomain(e.target.value)}>
                                <option value="" disabled>Select Domain</option>
                                <option value="Domain 1">Domain 1</option>
                                <option value="Domain 2">Domain 2</option>
                                {/* Add more domain options as needed */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Topic</label>
                            <input
                                type="text"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="Enter topic"
                            />
                        </div>

                        <div className="form-group" style={{ gridColumn: "1 / span 2" }}>
                            <label>Question</label>
                            <textarea className="add-question-field"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Enter the question"
                            />
                        </div>

                        <div className="form-group">
                            <label>Incorrect Answer 1</label>
                            <input
                                type="text"
                                value={incorrectAnswers[0]}
                                onChange={(e) => handleIncorrectAnswerChange(0, e.target.value)}
                                placeholder="Incorrect Answer 1"
                            />
                        </div>

                        <div className="form-group">
                            <label>Incorrect Answer 2</label>
                            <input
                                type="text"
                                value={incorrectAnswers[1]}
                                onChange={(e) => handleIncorrectAnswerChange(1, e.target.value)}
                                placeholder="Incorrect Answer 2"
                            />
                        </div>

                        <div className="form-group">
                            <label>Incorrect Answer 3</label>
                            <input
                                type="text"
                                value={incorrectAnswers[2]}
                                onChange={(e) => handleIncorrectAnswerChange(2, e.target.value)}
                                placeholder="Incorrect Answer 3"
                            />
                        </div>

                        <div className="form-group">
                            <label>Correct Answer</label>
                            <input
                                type="text"
                                value={correctAnswer}
                                onChange={(e) => setCorrectAnswer(e.target.value)}
                                placeholder="Enter the correct answer"
                            />
                        </div>
                    </div>

                    <div className="button-group">
                        <button className="quit-button" onClick={() => navigate('/DataCaptureDashboard')}>Quit</button>
                        <button className="add-question-submit-button" onClick={() => navigate('/DataCaptureDashboard')}>Add Question</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddQuestions;
