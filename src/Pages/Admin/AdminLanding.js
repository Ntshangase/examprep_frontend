import React from "react";// Import Link from react-router-dom
import "./AdminLanding.css"; // Import the CSS file
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function AdminLanding() {
	return (
		<div className="admin-landing">
			<Sidebar />
			<div className="admin-landing-main-section">
				<div className="admin-landing-text-content">
					<h1>Welcome to the Exam Prep System</h1>
					<p>Handle all your Course needs in one place.</p>
				</div>
				<div className="admin-landing-icon-content">
					<i className="fas fa-laptop fa-10x"></i>{" "}
					{/* Laptop icon as a placeholder */}
				</div>
			</div>
		</div>
	);
}
