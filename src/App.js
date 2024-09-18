import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ModeratorDashboard from "./Pages/Moderator/ModeratorDashboard";
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";
import Admin from "./Pages/Admin/AdminLanding";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import "./Styles/global.css";
import StudentDashboard from "./Pages/Student/StudentDashboards";
import AssignedClasses from "./Pages/Lecturer/Classes/AssignedClasses"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AdminLanding" element={<Admin />} />
				<Route path="/ModerateAws" element={<ModerateAws />} />
				<Route path="/ModeratorDashboard" element={<ModeratorDashboard />} />
				<Route path="/QuestionView" element={<QuestionView />} />
				<Route path="/LecturerDashboard" element={<LecturerDashboard />} />
				<Route path="/StudentDashboard" element={<StudentDashboard />} />
				<Route path="/AssignedClasses" element={<AssignedClasses />} />
			</Routes>
		</Router>
	);
}
export default App;
