import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const ModeratorSidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/ModeratorDashboard">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/QuestionView">Questions </Link>
				</li>
			</ul>
		</aside>
	);
};

export default ModeratorSidebar;
