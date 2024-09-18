import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Pages/Admin/AdminLanding"
import ModeratorDashboard from './Pages/Moderator/ModeratorDashboard';
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";
import Admin from "./Pages/Admin/View/AdminLanding";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import './Styles/global.css';


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/adminLanding" element={<Admin />} />
				<Route path="/ModerateAws" element={<ModerateAws />} />
        <Route path="/ModeratorDashboard" element={<ModeratorDashboard />} />
		<Route path="/QuestionView" element={<QuestionView />} />

				<Route path="/AdminLanding" element={<Admin />} />
				<Route path="/LecturerDashboard" element={<LecturerDashboard />} />
			</Routes>
		</Router>
	);
}
export default App;
