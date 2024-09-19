import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ModeratorDashboard from "./Pages/Moderator/ModeratorDashboard";
import ModerateAws from "./Pages/Moderator/ModerateAws";
import QuestionView from "./Pages/Moderator/QuestionView";
import Admin from "./Pages/Admin/AdminLanding";
import LecturerDashboard from "./Pages/Lecturer/LecturerDashboard/LecturerDashboard";
import "./Styles/global.css";
import StudentDashboard from "./Pages/Student/StudentDashboards";
import AssignedClasses from "./Pages/Lecturer/Classes/AssignedClasses";
import ViewClass from "./Pages/Lecturer/ViewClass/ViewClass";
import ViewStudents from "./Pages/Lecturer/ViewStudents/ViewStudents";
import StudPerfom from "./Pages/Lecturer/ViewStudents/StudPerfom";
import SubmittedTests from "./Pages/Lecturer/SubmittedTests/SubmittedTests";
import StudentsSubmitted from "./Pages/Lecturer/StudentsSubmitted/StudentsSubmitted";


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
				<Route path="/ViewClass" element={<ViewClass />} />
				<Route path="/ViewStudents" element={<ViewStudents />} />
				<Route path="/StudPerfom" element={<StudPerfom />} />
				<Route path="/SubmittedTests" element={<SubmittedTests />} />
				<Route path="/StudentsSubmitted" element={<StudentsSubmitted />} />
			</Routes>
		</Router>
	);
}
export default App;
