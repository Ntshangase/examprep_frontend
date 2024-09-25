import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const DatacaptureSidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<Link to="/">
				<img src="/assets/logo.png" alt="sidebar-logo" />
			</Link>
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/DataCaptureDashboard">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/AddQuestions">Upload Questions </Link>
				</li>
				<li className="sidebar-link">
					<Link to="/UploadDumps">Upload Dump</Link>
				</li>
			</ul>
		</aside>
	);
};

export default DatacaptureSidebar;
