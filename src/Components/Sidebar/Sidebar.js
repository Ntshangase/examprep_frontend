import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ links }) => {

	// const linking = [
	// 	{route: "/Home", routeName: "Home"},
	// 	{route: "/AdminLanding", routeName: "AdminLanding"}
	// ]

	return (
		<aside className="sidebar-component-container">
			<Link to="/Home">
				<img src="/assets/certifiedpro.jpeg" alt="sidebar-logo" />
			</Link>
			<ul className="sidebar-content">
				{links.map( (link,index) => <li key={index}> <Link to={link.route}>{link.routeName}</Link> </li>)}
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
