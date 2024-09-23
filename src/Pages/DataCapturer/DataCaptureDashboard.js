import React from "react";
import {useNavigate } from 'react-router-dom';
import Navbar from "../../../src/Components/Navbar/Navbar";
import Sidebar from "../../../src/Components/Sidebar/Sidebar";
import './DataCaptureDashboard.css';  // CSS for styling

const DataCaptureDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="data-capture-dashboard">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <div className="content-area">
                    <h1>Welcome to Course Prep System</h1>
                    <p>Handle all your course preparation needs in one place, developed by the Fly By Night Team</p>
                    
                    <div className="button-container">
                        <button className="primary-add-question-button" onClick={() => navigate('/AddQuestions')} >Add Question</button>
                        <button className="primary-upload-dump-button" onClick={() => navigate('/UploadDumps')} >Upload Dump</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataCaptureDashboard;
