import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

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
		</aside>
	);
}
