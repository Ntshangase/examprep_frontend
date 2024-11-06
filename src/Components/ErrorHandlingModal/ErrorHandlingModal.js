// Modal.js
import React from "react";
import PropTypes from "prop-types";
import "./ErrorHandlingModal.css"; // CSS for the modal styling

const ErrorHandlingModal = ({ isOpen, onClose, title, message }) => {
	if (!isOpen) return null;

	return (
		<div className="error-handling-modal-overlay">
			<div className="error-handling-modal-container">
				<h2>{title}</h2>
				<p>{message}</p>
				<button className="error-handling-button" onClick={onClose}>
					OK
				</button>
			</div>
		</div>
	);
};

ErrorHandlingModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default ErrorHandlingModal;
