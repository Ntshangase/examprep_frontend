import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate(); // Get the navigate function

	const handleNavigateModerator = () => {
		navigate("/ModeratorDashboard");
	};
	const handleNavigateLecture = () => { //notice Landing not Dashboard
		navigate("/LecturerDashboard");
	};
	const handleNavigateAdmin = () => {
		navigate("/AdminLanding");
	};
	const handleNavigateStudent = () => {
		navigate("/StudentDashboards");
	};

	return (
		<div>
			<h1>Temporal landing page for exam prep application</h1>
			<button onClick={handleNavigateModerator}>Moderator</button>
			<button onClick={handleNavigateLecture}>Lecture</button>
			<button onClick={handleNavigateAdmin}>Admin</button>
			<button onClick={handleNavigateStudent}>Student</button>
		</div>
	);
}
export default Home;
