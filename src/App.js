import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Pages/Admin/View/AdminLanding";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import './Styles/global.css';


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AdminLanding" element={<Admin />} />
				<Route path="/LecturerDashboard" element={<LecturerDashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
