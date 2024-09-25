import React, { useState } from "react";
import DatacaptureSidebar from "../../../src/Components/Sidebar/DatacaptureSidebar";

import './UploadDumps.css';

const UploadDumps = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a document to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('document', file);
    };

    return (
        <div className="lecturer-dashboard">
        <div className="dashboard-content">
          <DatacaptureSidebar />
          <div className="content-area">
                    <h3 className="page-title">Upload Dump</h3>

                    <form onSubmit={handleSubmit} className="upload-form">
                        <label htmlFor="file-input" className="file-label">
                            <img src="upload-file.png" alt="File icon" className="file-icon" />
                            <p>Maximum size: 50MB</p>
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            onChange={handleFileChange}
                            accept=".doc,.docx,.pdf,.txt"
                            required
                            style={{ display: 'none' }}
                        />
                        <button
                            type="button"
                            onClick={() => document.getElementById('file-input').click()}
                            className="upload-button"
                        >
                            Choose File
                        </button>
                        <br/>
                        <br/>
                        <br/>
                        <div className="action-buttons">
                            <button type="button" className="upload-dump-quit-button">
                                Quit
                            </button>
                            <button type="submit" className="upload-dump-submit-button">
                                Upload Dump
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadDumps;
