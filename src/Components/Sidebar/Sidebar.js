import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Sidebar = ({ links }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`sidebar-component-container ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isCollapsed ? '>' : '<'} {/* Simple toggle button text */}
            </button>
            <Link to="/Home">
                <img src="/assets/certifiedpro.jpeg" alt="sidebar-logo" />
            </Link>
            <ul className="sidebar-content">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path} className="sidebar-content-link">
                            {link.pathName}
                        </Link>
                    </li>
                ))}
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

Sidebar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            pathName: PropTypes.string.isRequired,
        })
    ).isRequired, // Make sure links prop is required
};

export default Sidebar;