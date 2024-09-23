import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">
					<img src="/assets/logo.png" alt="ACT Logo" />
				</Link>
			</div>
			<div className="navbar-profile">
				<img src="/assets/Profile-icon.png" alt="Profile" />
			</div>
		</nav>
	);
};

export default Navbar;
