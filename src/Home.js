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
	const handleNavigateDataCaptureDashboard = () => {
		navigate("/DataCaptureDashboard");
	};

	return (
		<div>
			<h1>CertifiedPro temporal landing page</h1>
			<button onClick={handleNavigateModerator}>Moderator</button>
			<button onClick={handleNavigateLecture}>Lecture</button>
			<button onClick={handleNavigateAdmin}>Admin</button>
			<button onClick={handleNavigateStudent}>Student</button>
			<button onClick={handleNavigateDataCaptureDashboard}>Data Capture</button>
		</div>
	);
}
export default Home;
