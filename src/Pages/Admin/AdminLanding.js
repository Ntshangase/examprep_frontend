import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import './AdminLanding.css'

export default function AdminLanding() {
	return (
		<div className="admin-landing">
			<Navbar />
			<AdminSidebar />
			<div className="Admin-body">
				<h1>Welcome to Admin Dashboard</h1>
			</div>
		</div>
	);
}
