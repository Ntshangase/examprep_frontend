import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<Link to="/">
				<img src="/assets/logo.png" alt="sidebar-logo" />
			</Link>
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/AdminLanding">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/ManageCourse">Manage Courses</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/ManageClass">Manage Class</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/ManageStudents">Manage Students</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
