import React, { useState } from "react";
import Sidebar from "../../../src/Components/Sidebar/Sidebar";
import "./UploadDumps.css";
import courses from "../../Data/Courses.json";

const UploadDumps = () => {
	const links = [{ path: "/DataCaptureDashboard", pathName: "Home" }];

	const [file, setFile] = useState(null);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!file) {
			alert("Please select a document to upload.");
			return;
		}

		const formData = new FormData();
		formData.append("document", file);
	};

	return (
		<div className="upload-dumps-dashboard">
			<Sidebar links={links} />
			<div className="upload-dumps-content">
				<h2 className="upload-dumps-h2">Upload Dump</h2>
				<div className="add-questions-info-flow">
					<img
						src={courses[0].image}
						alt={courses[0].title}
						className="add-questions-course-image"
					/>
					<div className="add-questions-course-title">
						<h3>{courses[0].title}</h3>
					</div>
				</div>
				<form onSubmit={handleSubmit} className="upload-dump-input-area">
					<div>
						<label htmlFor="file-input" className="upload-dump-file-label">
							<img
								src="/assets/uploadfile.png"
								alt="File icon"
								className="file-icon"
							/>
							<p>Maximum size: 50MB</p>
						</label>
						<input
							id="file-input"
							type="file"
							onChange={handleFileChange}
							accept=".doc,.docx,.pdf,.txt"
							required
							style={{ display: "none" }}
						/>
					</div>
					<button
						type="button"
						onClick={() => document.getElementById("file-input").click()}
						className="upload-button"
					>
						Choose File
					</button>
				</form>
				<div className="action-buttons">
					<button type="button" className="upload-dump-quit-button">
						Quit
					</button>
					<button type="submit" className="upload-dump-submit-button">
						Upload Dump
					</button>
				</div>
			</div>
		</div>
	);
};

export default UploadDumps;
