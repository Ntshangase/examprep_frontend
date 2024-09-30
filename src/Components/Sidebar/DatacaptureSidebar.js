import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const DatacaptureSidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/DataCaptureDashboard">Home</Link>
				</li>
			</ul>
		</aside>
	);
};

export default DatacaptureSidebar;
