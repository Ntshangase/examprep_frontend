import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Pages/Admin/AdminLanding"
<<<<<<< HEAD
import ModeratorDashboard from './Pages/Moderator/ModeratorDashboard';
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";
=======
import Testing from "./Pages/Admin/Testing";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import './Styles/global.css';
>>>>>>> 7028dc360410cc8d2700904e8c0794820ba83865


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
<<<<<<< HEAD
				<Route path="/adminLanding" element={<Admin />} />
				<Route path="/ModerateAws" element={<ModerateAws />} />
        <Route path="/ModeratorDashboard" element={<ModeratorDashboard />} />
		<Route path="/QuestionView" element={<QuestionView />} />

=======
				<Route path="/AdminLanding" element={<Admin />} />
				<Route path="/Testing" element={<Testing />} />
				<Route path="/LecturerDashboard" element={<LecturerDashboard />} />
>>>>>>> 7028dc360410cc8d2700904e8c0794820ba83865
			</Routes>
		</Router>
	);
}
export default App;
