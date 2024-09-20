import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './AdminLanding.css'; // Import the CSS file

export default function AdminLanding() {
    return (
        <div>
			<Navbar />
			<div className="admin-landing">
            <div className="main-section">
                <div className="text-content">
                    <h1>Welcome to the Exam Prep System</h1>
                    <p>Handle all your Course needs in one place.</p>
                </div>
                <div className="icon-content">
                    <i className="fas fa-laptop fa-10x"></i> {/* Laptop icon as a placeholder */}
                </div>
            </div>
            <div className="features-section">
                <div className="feature-card">
                    <i className="fas fa-user-plus fa-2x"></i>
                    <p>Manage Users</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-chalkboard-teacher fa-2x"></i>
                    <p>Manage Classes</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-book fa-2x"></i>
                    <p>Manage Courses</p>
                </div>
            </div>
        </div>
		</div>
    );
}