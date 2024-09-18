import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Pages/Admin/AdminLanding"
import Testing from "./Pages/Admin/Testing";
import AddUser from "./Pages/Admin/AddUser";
import ModeratorDashboard from './Pages/Moderator/ModeratorDashboard';
import ModeratorDashboard from "./Pages/Moderator/ModeratorDashboard";
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";
import Admin from "./Pages/Admin/View/AdminLanding";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import "./Styles/global.css";
import StudentDashboard from "./Pages/Student/StudentDashboards";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminLanding" element={<Admin />} />
				<Route path="/Testing" element={<Testing />} />
				<Route path="/AddUser" element={<AddUser />} />
				<Route path="/AdminLanding" element={<Admin />} />
				<Route path="/ModerateAws" element={<ModerateAws />} />
				<Route path="/ModeratorDashboard" element={<ModeratorDashboard />} />
				<Route path="/QuestionView" element={<QuestionView />} />
				<Route path="/LecturerDashboard" element={<LecturerDashboard />} />
				<Route path="/StudentDashboard" element={<StudentDashboard />} />
			</Routes>
		</Router>
	);
}
export default App;
