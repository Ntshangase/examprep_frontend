import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/">Home</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
