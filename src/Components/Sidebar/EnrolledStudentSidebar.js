import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const EnrolledStudentSidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<Link to="/">
				<img src="/assets/logo.png" alt="sidebar-logo" />
			</Link>
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/Classes">Active Classes</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/PanelEnrolled">Enrolled Class </Link>
				</li>
				<li className="sidebar-link">
					<Link to="/ScheduledTests">Scheduled Tests</Link>
				</li>
			</ul>
		</aside>
	);
};

export default EnrolledStudentSidebar;
