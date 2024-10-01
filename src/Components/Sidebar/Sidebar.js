import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
	return (
		<aside className="sidebar-component-container">
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/">Testing </Link>
				</li>
				<li className="sidebar-link">
					<Link to="/">Testing</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/">Testing</Link>
				</li>
			</ul>
			<div className="sidebar-user-details">
				<FontAwesomeIcon icon={faUser} className="sidebar-user-icon" />
				<div className="sidebar-user-details-content">
					<p className="sidebar-user-details-name">Vezindlebe Ntshangase</p>
					<p className="sidebar-user-details-email">simphiwe@gmail.com</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
