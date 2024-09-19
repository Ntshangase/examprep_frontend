import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

export default function AdminSidebar() {
	return (
		<div>
			<aside className="sidebar">
				<ul>
                    <li className="active"><Link to="/AdminLanding">Home</Link></li>
                    <li className="active"><Link to="/AddCourse">Manage Courses</Link></li>
                    <li className="active"><Link to="/AddCourse">Manage Exam</Link></li>
				</ul>
			</aside>
		</div>
	);
}
