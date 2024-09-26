import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./AdminLanding.css"; // Import the CSS file
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";

export default function AdminLanding() {
	return (
		<div className="admin-landing">
			<AdminSidebar />
			<div className="main-section">
				<div className="text-content">
					<h1>Welcome to the Exam Prep System</h1>
					<p>Handle all your Course needs in one place.</p>
				</div>
				<div className="icon-content">
					<i className="fas fa-laptop fa-10x"></i>{" "}
					{/* Laptop icon as a placeholder */}
				</div>
			</div>
		</div>
	);
}
