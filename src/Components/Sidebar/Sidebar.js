import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import LogoutPopout from "../LogoutPopup/LogoutPopout";
import { clearUser } from "../../App/Slices/UserSlice";

const Sidebar = ({ links }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const user = useSelector((state) => state.user.userData);
	const [popupVisible, setPopupVisible] = useState(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};
	// In your Logout function
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
        const currentUserId = localStorage.getItem('currentUserId');
        if (currentUserId) {
            localStorage.removeItem(`user_${currentUserId}`);
        }
        localStorage.removeItem('currentUserId');
        dispatch(clearUser());
        navigate('/');
    };

	return (
		<aside
			className={`sidebar-component-container ${
				isCollapsed ? "collapsed" : ""
			}`}
		>
			<button className="toggle-button" onClick={toggleSidebar}>
				{isCollapsed ? ">" : "<"} {/* Simple toggle button text */}
			</button>
			<img
				src="/assets/certifiedpro.jpeg"
				className="sidebar-component-header-image"
				alt="sidebar-logo"
			/>
			<ul className="sidebar-content">
				{links.map((link, index) => (
					<li key={index}>
						<Link to={link.path} className="sidebar-content-link">
							{link.pathName}
						</Link>
					</li>
				))}
			</ul>
			<div className="sidebar-user-details-div">
				<img
					src={`data:image/jpeg;base64,${user.profileImage}`}
					alt={user.fullNames}
					className="sidebar-profile-image"
				/>
				<div className="sidebar-user-details-container">
					<div className="sidebar-user-details-content">
						<p className="sidebar-user-details-name">{user.fullNames}</p>
						<p className="sidebar-user-details-email">{user.email}</p>
					</div>
					<FontAwesomeIcon
						icon={faEllipsisV}
						className="sidebar-ellipsis-icon"
						onClick={() => setPopupVisible(true)}
					/>
					{popupVisible && <LogoutPopout onLogout={handleLogout} />}
				</div>
			</div>
		</aside>
	);
};

Sidebar.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			pathName: PropTypes.string.isRequired,
		})
	).isRequired, // Make sure links prop is required
};

export default Sidebar;
