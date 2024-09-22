import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "../../Components/Navbar/Navbar";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import "./AdminLanding.css";
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
                    <Link to="/ManageUser" className="feature-card">
                        <i className="fas fa-user-plus fa-2x"></i>
                        <p>Manage Users</p>
                    </Link>
                    <Link to="/ManageClass" className="feature-card">
                        <i className="fas fa-chalkboard-teacher fa-2x"></i>
                        <p>Manage Classes</p>
                    </Link>
                    <Link to="/ManageCourse" className="feature-card">
                        <i className="fas fa-book fa-2x"></i>
                        <p>Manage Courses</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}