import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Pages/Admin/AdminLanding"
import ModeratorDashboard from './Pages/Moderator/ModeratorDashboard';
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminLanding" element={<Admin />} />
				<Route path="/ModerateAws" element={<ModerateAws />} />
				<Route path="/LecturerDashboard" element={<LecturerDashboard />} />
        <Route path="/ModeratorDashboard" element={<ModeratorDashboard />} />
		<Route path="/QuestionView" element={<QuestionView />} />

			</Routes>
		</Router>
	);
}
export default App;
