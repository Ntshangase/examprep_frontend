import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function AdminSidebar() {
	return (
		<aside className="sidebar-component-container">
			<ul className="sidebar-content">
				<li className="sidebar-link">
					<Link to="/AdminLanding">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/ManageUser">Manage Users</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/ManageCourse">Manage Courses</Link>
				</li>
				<li className="sidebar-link">
					<Link to="/ManageClass">Manage Classes</Link>
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
}
