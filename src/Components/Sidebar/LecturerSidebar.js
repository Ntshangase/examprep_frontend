import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const LecturerSidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<Link to="/">
				<img src="/assets/logo.png" alt="sidebar-logo" />
			</Link>
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/LecturerDashboard">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/LecturerDashboard">Courses</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/AddStudent">Add Student</Link>
				</li>
			</ul>
		</aside>
	);
};

export default LecturerSidebar;
