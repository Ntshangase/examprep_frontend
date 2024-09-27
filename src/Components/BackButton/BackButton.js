import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Add your styles here

export default function BackButton({ label = "Back" }) {
	const navigate = useNavigate();

	return (
		<button className="back-button" onClick={() => navigate(-1)}>
			<span className="back-icon">←</span> {label}
		</button>
	);
}
