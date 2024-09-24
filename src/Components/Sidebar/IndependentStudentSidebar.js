import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const IndependentStudentSidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<Link to="/">
				<img src="/assets/logo.png" alt="sidebar-logo" />
			</Link>
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/IndStudentdash">Course Details </Link>
				</li>
				<li className="sidebar-link">
					<Link to="/TestReview">Test review</Link>
				</li>
			</ul>
		</aside>
	);
};

export default IndependentStudentSidebar;
